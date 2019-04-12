using DotNetCore.Objects;
using GAP.Infrastructure;
using GAP.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GAP.Application
{
    public sealed class CustomerApplicationService : BaseApplicationService, ICustomerApplicationService
    {
        public CustomerApplicationService
        (
            ICustomerRepository customerRepository
        )
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
    }
}
