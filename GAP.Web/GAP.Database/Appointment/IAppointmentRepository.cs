using DotNetCore.Repositories;
using GAP.Domain;
using GAP.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GAP.Infrastructure
{
    public interface IAppointmentRepository : IRelationalRepository<AppointmentEntity>
    {
        Task<IEnumerable<AppointmentModel>> GetByCustomerId(long customerId);
    }
}
