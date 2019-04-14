using DotNetCore.Objects;
using GAP.Infrastructure;
using GAP.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GAP.Application
{
    public sealed class AppointmentApplicationService : BaseApplicationService, IAppointmentApplicationService
    {
        public AppointmentApplicationService(IAppointmentRepository appointmentRepository)
        {
            AppointmentRepository = appointmentRepository;
        }

        private IAppointmentRepository AppointmentRepository { get; }

        public async Task<PagedList<AppointmentModel>> ListAsync(PagedListParameters parameters)
        {
            return await AppointmentRepository.ListAsync<AppointmentModel>(parameters);
        }

        public async Task<IEnumerable<AppointmentModel>> ListAsync(long customerId)
        {
            return await AppointmentRepository.GetByCustomerId(customerId);
        }
    }
}