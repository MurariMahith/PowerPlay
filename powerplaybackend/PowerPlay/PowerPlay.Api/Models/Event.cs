using System;
using System.Collections.Generic;

namespace PowerPlay.Api.Models
{
    public partial class Event
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Host { get; set; }
        public string OrganizedBy { get; set; }
        public string EnrolledMembers { get; set; }
        public string AttendedMembers { get; set; }
        public int? TotalSpots { get; set; }
        public string Category { get; set; }
        public string EventType { get; set; }
        public string Mode { get; set; }
        public string Location { get; set; }
        public string Description { get; set; }
        public string Tags { get; set; }
        public string StartDate { get; set; }
        public string StartTime { get; set; }
        public string EndDate { get; set; }
        public string EndTime { get; set; }
        public bool? IsDeleted { get; set; }
    }
}
