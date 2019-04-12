using GAP.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace GAP.Database.Customer
{
    public sealed class CustomerEntityConfiguration : IEntityTypeConfiguration<CustomerEntity>
    {
        public void Configure(EntityTypeBuilder<CustomerEntity> builder)
        {
            builder.ToTable("Customers");

            builder.HasKey(x => x.CustomerId);
            builder.HasIndex(x => x.Nit).IsUnique();

            builder.Property(x => x.CustomerId).IsRequired().ValueGeneratedOnAdd();
            builder.Property(x => x.Email).IsRequired().HasMaxLength(300);
            builder.Property(x => x.Status).IsRequired();
            builder.Property(x => x.BirthDay).IsRequired();
            builder.Property(x => x.Nit).IsRequired(); ;
            builder.Property(x => x.DocumentType).IsRequired();

            builder.OwnsOne(x => x.FullName, y =>
            {
                y.Property(x => x.Name).IsRequired().HasMaxLength(100);
                y.Property(x => x.Surname).IsRequired().HasMaxLength(200);
            });
        }
    }
}
