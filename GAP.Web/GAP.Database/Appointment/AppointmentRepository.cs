using DotNetCore.EntityFrameworkCore;
using GAP.Domain;
using GAP.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GAP.Infrastructure
{
    public sealed class AppointmentRepository : EntityFrameworkCoreRelationalRepository<AppointmentEntity>, IAppointmentRepository
    {
        public AppointmentRepository(DatabaseContext context) : base(context)
        {
        }

        public Task<IEnumerable<AppointmentModel>> GetByCustomerId(long customerId)
        {
            return ListAsync<AppointmentModel>
           (
               appointmentEntity =>
               appointmentEntity.CustomerId == customerId
           );
        }
    }
}
