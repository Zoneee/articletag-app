﻿using System;

namespace ArticleTag.Models
{
    public class WorkloadVm
    {
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public int PageIndex { get; set; }
        public int PageSize { get; set; }
    }
}
