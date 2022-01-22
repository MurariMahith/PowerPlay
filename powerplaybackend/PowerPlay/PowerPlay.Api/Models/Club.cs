using System;
using System.Collections.Generic;

namespace PowerPlay.Api.Models
{
    public partial class Club
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public int? President { get; set; }
        public string Committee { get; set; }
        public string Description { get; set; }
        public string Events { get; set; }
        public string Members { get; set; }
        public string Category { get; set; }
        public string Type { get; set; }
        public string Tags { get; set; }
        public DateTime? OpenDate { get; set; }
        public DateTime? ArchiveDate { get; set; }
        public string Status { get; set; }
        public bool? IsDeleted { get; set; }
    }
}
