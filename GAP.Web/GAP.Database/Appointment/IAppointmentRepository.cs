using DotNetCore.Repositories;
using GAP.Domain;

namespace GAP.Infrastructure
{
    public interface IAppointmentRepository : IRelationalRepository<AppointmentEntity>
    {
    }
}
