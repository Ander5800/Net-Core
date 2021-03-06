﻿using DotNetCore.EntityFrameworkCore;
using GAP.Domain;
using GAP.Model;
using System.Threading.Tasks;

namespace GAP.Infrastructure
{
    public sealed class UserRepository : EntityFrameworkCoreRelationalRepository<UserEntity>, IUserRepository
    {
        public UserRepository(DatabaseContext context) : base(context)
        {
        }

        public Task<SignedInModel> SignInAsync(SignInModel signInModel)
        {
            return SingleOrDefaultAsync<SignedInModel>
            (
                userEntity =>
                userEntity.SignIn.Login.Equals(signInModel.Login) &&
                userEntity.SignIn.Password.Equals(signInModel.Password) &&
                userEntity.Status == Status.Active
            );
        }
    }
}
