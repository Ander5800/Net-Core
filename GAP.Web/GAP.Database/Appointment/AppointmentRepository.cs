using DotNetCore.EntityFrameworkCore;
using GAP.Domain;

namespace GAP.Infrastructure
{
    public sealed class AppointmentRepository : EntityFrameworkCoreRelationalRepository<AppointmentEntity>, IAppointmentRepository
    {
        public AppointmentRepository(DatabaseContext context) : base(context)
        {
        }
    }
}
