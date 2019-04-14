using DotNetCore.Objects;
using GAP.Infrastructure;
using GAP.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GAP.Application
{
    public sealed class CustomerApplicationService : BaseApplicationService, ICustomerApplicationService
    {
        public CustomerApplicationService(ICustomerRepository customerRepository)
        {
            CustomerRepository = customerRepository;
        }

        private ICustomerRepository CustomerRepository { get; }

        public async Task<PagedList<CustomerModel>> ListAsync(PagedListParameters parameters)
        {
            return await CustomerRepository.ListAsync<CustomerModel>(parameters);
        }

        public async Task<IEnumerable<CustomerModel>> ListAsync()
        {
            return await CustomerRepository.ListAsync<CustomerModel>();
        }

        //public async Task<IDataResult<long>> AddAsync(AddCustomerModel addCustomerModel)
        //{
        //    var validation = new AddUserModelValidator().Valid(addUserModel);

        //    if (!validation.Success)
        //    {
        //        return ErrorDataResult<long>(validation.Message);
        //    }

        //    UserDomainService.GenerateHash(addUserModel.SignIn);

        //    var userEntity = UserEntityFactory.Create(addUserModel);

        //    userEntity.Add();

        //    await UserRepository.AddAsync(userEntity);

        //    await DatabaseUnitOfWork.SaveChangesAsync();

        //    return SuccessDataResult(userEntity.UserId);
        //}
    }
}
