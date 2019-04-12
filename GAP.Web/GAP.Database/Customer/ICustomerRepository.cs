using DotNetCore.Repositories;
using GAP.Domain;

namespace GAP.Database.Customer
{
    public interface ICustomerRepository : IRelationalRepository<CustomerEntity>
    {
    }
}
