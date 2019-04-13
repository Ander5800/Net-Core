using GAP.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace GAP.Domain
{
    public interface IUserDomainService
    {
        void GenerateHash(SignInModel signInModel);

        TokenModel GenerateToken(SignedInModel signedInModel);
    }
}
