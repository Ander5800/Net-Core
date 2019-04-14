using GAP.Domain;
using GAP.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;

namespace GAP.Infrastructure
{
    public sealed class AppointmentEntityConfiguration : IEntityTypeConfiguration<AppointmentEntity>
    {
        public void Configure(EntityTypeBuilder<AppointmentEntity> builder)
        {
            builder.ToTable("Appointments");

            builder.HasKey(x => x.AppointmentId);

            builder.Property(x => x.AppointmentId).IsRequired().ValueGeneratedOnAdd();
            builder.Property(x => x.CustomerId).IsRequired();
            builder.Property(x => x.AppointmentDate).IsRequired();

            builder.Property<int>("DepartmentTypeId")
                .IsRequired();

            builder.HasOne(p => p.Department)
                .WithOne()
                .HasForeignKey(typeof(Domain.DepartmentType).ToString(), "DepartmentTypeId");

            builder.HasOne(x => x.Customer).WithMany(x => x.Appointments).HasForeignKey(x => x.CustomerId);
        }
    }
}
