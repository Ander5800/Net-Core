using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DotNetCore.Objects;
using GAP.Application;
using GAP.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GAP.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomersController : ControllerBase
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


        
        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }
    }
}