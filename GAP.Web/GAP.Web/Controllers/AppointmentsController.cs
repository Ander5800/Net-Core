using DotNetCore.Objects;
using GAP.Application;
using GAP.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GAP.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class AppointmentsController : BaseController
    {
        private IAppointmentApplicationService AppointmentApplicationService { get; }

        public AppointmentsController(IAppointmentApplicationService appointmentApplicationService)
        {
            AppointmentApplicationService = appointmentApplicationService;
        }

        [HttpGet("Grid")]
        public async Task<PagedList<AppointmentModel>> GridAsync([FromQuery]PagedListParameters parameters)
        {
            return await AppointmentApplicationService.ListAsync(parameters);
        }
        
        [HttpGet("{customerId}")]
        public async Task<IEnumerable<AppointmentModel>> Get(long customerId)
        {
            return await AppointmentApplicationService.ListAsync(customerId);
        }

        [HttpPost]
        public async Task<IActionResult> AddAsync(AddAppointmentModel addAppointmentModel)
        {
            return Result(await AppointmentApplicationService.AddAsync(addAppointmentModel));
        }

        [HttpDelete("{appointmentId}")]
        public async Task<IActionResult> DeleteAsync(long appointmentId)
        {
            return Result(await AppointmentApplicationService.DeleteAsync(appointmentId));
        }
    }
}