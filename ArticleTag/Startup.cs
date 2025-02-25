using System;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;
using ArticleTag.Extensions;
using ArticleTag.Filters;
using ArticleTag.Helpers;
using Autofac;
using Autofac.Extensions.DependencyInjection;
using Businesses;
using Entity;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;

namespace ArticleTag
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }
        public ILifetimeScope AutofacContainer { get; private set; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(corsOption =>
            {
                corsOption.AddPolicy("local", bulder =>
                {
#if DEBUG
                    bulder.WithOrigins("http://localhost:9528")
                        .AllowAnyHeader()
                        .AllowAnyMethod();
#endif
                });
            });

            services.AddDistributedMemoryCache(options =>
            {
                options.ExpirationScanFrequency = TimeSpan.FromMinutes(30);
            });
            //services.AddMemoryCache(options =>
            //{
            //    options.ExpirationScanFrequency = TimeSpan.FromMinutes(30);
            //});
            services.AddControllers(option =>
            {
                option.Filters.Add(typeof(ApiExceptionFilterAttribute));
            })
                .AddJsonOptions(options =>
                {
                    options.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
                    options.JsonSerializerOptions.WriteIndented = true;
                });
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "clientapp/dist";
            });
            services.AddSwaggerSupport();
            // configure strongly typed settings objects
            var appSettingsSection = Configuration.GetSection("AppSettings");
            services.Configure<AppSettings>(appSettingsSection);

            // configure jwt authentication
            var appSettings = appSettingsSection.Get<AppSettings>();
            var key = Encoding.ASCII.GetBytes(appSettings.Secret);
            services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(x =>
            {
                x.RequireHttpsMetadata = false;
                x.SaveToken = true;
                x.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                    ValidateIssuer = false,
                    ValidateAudience = false
                };
            });

            // 注册单例定时任务
            services.AddSingleton<IHostedService, SkipTimeResetTask>();
        }

        // ConfigureContainer is where you can register things directly
        // with Autofac. This runs after ConfigureServices so the things
        // here will override registrations made in ConfigureServices.
        // Don't build the container; that gets done for you by the factory.
        public void ConfigureContainer(ContainerBuilder builder)
        {
            builder.AddEntity();
            builder.AddBusiness();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            this.AutofacContainer = app.ApplicationServices.GetAutofacRoot();
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseSpaStaticFiles();
            app.UseRouting();
            app.UseCors("local");
            app.UseAuthentication();
            app.UseAuthorization();
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "ArticleTag Web api");
            });

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers()
                .RequireCors("local");
            });

            app.UseSpa(spa =>
            {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501
                spa.Options.SourcePath = "clientapp";

                if (env.IsDevelopment())
                {
                    // spa.UseVueCli(npmScript: "serve", runner: ScriptRunnerType.Yarn);
                }
            });
        }
    }
}
