using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace PowerPlay.Api.Models
{
    public partial class PowerPlayDevContext : DbContext
    {
        public PowerPlayDevContext()
        {
        }

        public PowerPlayDevContext(DbContextOptions<PowerPlayDevContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Club> Club { get; set; }
        public virtual DbSet<Event> Event { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=DESKTOP-P9SBC8J;Database=PowerPlayDev;Trusted_Connection=True;User Id=REGIS;Password=REGIS");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Club>(entity =>
            {
                entity.Property(e => e.ArchiveDate).HasColumnType("datetime");

                entity.Property(e => e.Category)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Committee).IsUnicode(false);

                entity.Property(e => e.Description).IsUnicode(false);

                entity.Property(e => e.Events).IsUnicode(false);

                entity.Property(e => e.Members).IsUnicode(false);

                entity.Property(e => e.Name)
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.OpenDate).HasColumnType("datetime");

                entity.Property(e => e.Status)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Tags)
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.Type)
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Event>(entity =>
            {
                entity.Property(e => e.AttendedMembers).IsUnicode(false);

                entity.Property(e => e.Category)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Description).IsUnicode(false);

                entity.Property(e => e.EndDate)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.EndTime)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.EnrolledMembers).IsUnicode(false);

                entity.Property(e => e.EventType)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Host)
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.Location)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.Mode)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.OrganizedBy)
                    .HasColumnName("OrganizedBy ")
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.StartDate)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.StartTime)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Tags)
                    .HasMaxLength(250)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
