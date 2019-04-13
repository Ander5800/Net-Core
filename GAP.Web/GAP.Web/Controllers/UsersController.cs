using DotNetCore.AspNetCore;
using GAP.Application;
using GAP.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace GAP.Web.Controllers
{
    [ApiController]
    [RouteController]
    public class UsersController : BaseController
    {
        public UsersController(IUserApplicationService userApplicationService)
        {
            UserApplicationService = userApplicationService;
        }

        private IUserApplicationService UserApplicationService { get; }

        [AllowAnonymous]
        [HttpPost("SignIn")]
        public async Task<IActionResult> SignInAsync(SignInModel signInModel)
        {
            return Result(await UserApplicationService.SignInJwtAsync(signInModel));
        }
    }
}