﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using Common;
using Entity.Entities;
using Entity.Enum;
using FreeSql;

namespace DecodeSpecialChars
{
    class Program
    {
        /*static IFreeSql fsql = new FreeSql.FreeSqlBuilder()
            .UseConnectionString(FreeSql.DataType.SqlServer, @"server=192.168.1.55;database=ArticleTag;uid=sa;pwd=deepbiodb@2019")
            .Build();*/
        static IFreeSql fsql = new FreeSql.FreeSqlBuilder()
            .UseConnectionString(FreeSql.DataType.SqlServer,
                @"server=deepbio-prod.sqlserver.rds.aliyuncs.com,1433;database=ArticleTag;uid=zhanglianlian;pwd=3k%0S7r8Ah")
            .Build();
        static void Main(string[] args)
        {
            var processCatalog = "decode_hex";

            var list = fsql.Select<ArticleTaggedRecord>()
                .WithSql(
                    $"select a.* from ArticleTaggedRecord a where a.id not in (select theid from BatchProcessHst where [Catalog] = '{processCatalog}')");
            var count = list.Count();
            var i = 0;
            while (true)
            {
                try
                {
                    //because data in BatchProcessHst keep changing bellow, so every time just fetch the first one is ok to iterate the set
                    var obj = list.Take(1).First();
                    if (obj == null)
                    {
                        Console.WriteLine("Finished");
                        Console.Read();
                        return;
                    }

                    var hst = new BatchProcessHst()
                    {
                        TheID = obj.ID,
                        Catalog = processCatalog,
                        _timestamp = DateTime.Now
                    };
                    var newContent = Decode(obj.TaggedContent);
                    if (newContent != obj.TaggedContent)
                    {
                        var rows = fsql.Update<ArticleTaggedRecord>(obj.ID).Set(p => p.TaggedContent, newContent).ExecuteAffrows();
                        hst.Modified = 1;
                    }

                    fsql.Insert(hst).ExecuteAffrows();

                    Console.WriteLine($"{++i}/{count}");
                }
                catch (Exception e)
                {
                    Console.WriteLine(e);
                    Console.Read();
                    return;
                }

            }

        }



        static string Decode(string input)
        {
            var hexReg = new Regex(@"(\\x[0-9a-fA-F]{2})+");
            var output = hexReg.Replace(input, m => ConvertHexString(m.Value));
            return output;
        }

        static string ConvertHexString(string input)
        {
            var reg = new Regex(@"(?<=\\x)[0-9a-fA-F]{2}");
            var values = reg.Matches(input).Select(p => p.Value);
            var bytes = new List<byte>();
            foreach (var value in values)
            {
                var b = Convert.ToByte(value, 16);
                bytes.Add(b);
            }

            var str = Encoding.UTF8.GetString(bytes.ToArray());
            return str;
        }


    }
}
