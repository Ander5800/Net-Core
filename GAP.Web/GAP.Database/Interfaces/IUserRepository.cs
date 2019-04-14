using DotNetCore.Repositories;
using GAP.Domain;
using GAP.Model;
using System.Threading.Tasks;

namespace GAP.Infrastructure
{
    public interface IUserRepository : IRelationalRepository<UserEntity>
    {
        Task<SignedInModel> SignInAsync(SignInModel signInModel);
    }
}
