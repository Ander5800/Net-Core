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
    public class CustomersController : BaseController
    {
        private ICustomerApplicationService CustomerApplicationService { get; }

        public CustomersController(ICustomerApplicationService customerApplicationService)
        {
            CustomerApplicationService = customerApplicationService;
        }

        [HttpGet("Grid")]
        public async Task<PagedList<CustomerModel>> GridAsync([FromQuery]PagedListParameters parameters)
        {
            return await CustomerApplicationService.ListAsync(parameters);
        }

        [HttpGet]
        public async Task<IEnumerable<CustomerModel>> Get()
        {
            return await CustomerApplicationService.ListAsync();
        }

        //[HttpPost]
        //public void Post(AddCustomerModel addCustomerModel)
        //{
        //    return await CustomerApplicationService.AddAsync(addCustomerModel);
        //}
    }
}