using DotNetCore.Objects;
using GAP.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace GAP.Application
{
    public interface IUserApplicationService
    {
        Task<IDataResult<SignedInModel>> SignInAsync(SignInModel signInModel);

        Task<IDataResult<TokenModel>> SignInJwtAsync(SignInModel signInModel);
    }
}
