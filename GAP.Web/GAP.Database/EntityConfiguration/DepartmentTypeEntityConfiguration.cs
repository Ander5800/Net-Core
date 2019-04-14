using GAP.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace GAP.Infrastructure.EntityConfiguration
{
    class DepartmentTypeEntityConfiguration : IEntityTypeConfiguration<DepartmentType>
    {
        public void Configure(EntityTypeBuilder<DepartmentType> builder)
        {
            builder.ToTable("departments");

            builder.HasKey(ct => ct.Id);

            builder.Property(ct => ct.Id)
                .HasDefaultValue(1)
                .ValueGeneratedNever()
                .IsRequired();

            builder.Property(ct => ct.Name)
                .HasMaxLength(200)
                .IsRequired();
        }
    }
}
