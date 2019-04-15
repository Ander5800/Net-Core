using DotNetCore.Objects;
using GAP.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GAP.Application
{
    public interface IAppointmentApplicationService
    {
        Task<PagedList<AppointmentModel>> ListAsync(PagedListParameters parameters);

        Task<IEnumerable<AppointmentModel>> ListAsync(long customerId);

        Task<IDataResult<AppointmentModel>> AddAsync(AddAppointmentModel addAppointmentModel);

        Task<IResult> DeleteAsync(long appointmentId);
    }
}
