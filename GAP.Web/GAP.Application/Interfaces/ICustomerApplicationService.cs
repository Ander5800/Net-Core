using DotNetCore.Objects;
using GAP.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GAP.Application
{
    public interface ICustomerApplicationService
    {
        Task<PagedList<CustomerModel>> ListAsync(PagedListParameters parameters);

        Task<IEnumerable<CustomerModel>> ListAsync();
    }
}
