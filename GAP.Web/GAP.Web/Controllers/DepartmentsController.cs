using GAP.Application;
using GAP.Model;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GAP.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentsController : ControllerBase
    {
        private IDepartmentApplicationService DepartmentApplicationService { get; }

        public DepartmentsController(IDepartmentApplicationService departmentApplicationService)
        {
            DepartmentApplicationService = departmentApplicationService;
        }

        [HttpGet]
        public async Task<IEnumerable<DepartmentType>> Get()
        {
            return await DepartmentApplicationService.ListAsync();
        }
    }
}