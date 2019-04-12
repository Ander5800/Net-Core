using GAP.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

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
            builder.Property(x => x.Status).IsRequired();

            builder.HasOne(x => x.Customer).WithMany(x => x.Appointments).HasForeignKey(x => x.AppointmentId);
        }
    }
}
