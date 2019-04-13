using DotNetCore.Objects;
using GAP.Domain;
using GAP.Infrastructure;
using GAP.Model;
using GAP.Model.Models;
using System.Threading.Tasks;

namespace GAP.Application
{
    public sealed class UserApplicationService : BaseApplicationService, IUserApplicationService
    {
        public UserApplicationService
        (
            IDatabaseUnitOfWork databaseUnitOfWork,
            IUserDomainService userDomainService,
            IUserRepository userRepository
        )
        {
            DatabaseUnitOfWork = databaseUnitOfWork;
            UserDomainService = userDomainService;
            UserRepository = userRepository;
        }

        private IDatabaseUnitOfWork DatabaseUnitOfWork { get; }

        private IUserDomainService UserDomainService { get; }

        private IUserRepository UserRepository { get; }

        public async Task<IDataResult<SignedInModel>> SignInAsync(SignInModel signInModel)
        {
            var validation = new SignInModelValidator().Valid(signInModel);

            if (!validation.Success)
            {
                return ErrorDataResult<SignedInModel>(validation.Message);
            }

            UserDomainService.GenerateHash(signInModel);

            var signedInModel = await UserRepository.SignInAsync(signInModel);

            validation = new SignedInModelValidator().Valid(signedInModel);

            if (!validation.Success)
            {
                return ErrorDataResult<SignedInModel>(validation.Message);
            }

            return SuccessDataResult(signedInModel);
        }

        public async Task<IDataResult<TokenModel>> SignInJwtAsync(SignInModel signInModel)
        {
            var result = await SignInAsync(signInModel).ConfigureAwait(false);

            if (!result.Success)
            {
                return ErrorDataResult<TokenModel>(result.Message);
            }

            var tokenModel = UserDomainService.GenerateToken(result.Data);

            return SuccessDataResult(tokenModel);
        }
    }
}
