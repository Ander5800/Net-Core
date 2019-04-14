using DotNetCore.EntityFrameworkCore;
using GAP.Domain;

namespace GAP.Infrastructure
{
    public sealed class CustomerRepository : EntityFrameworkCoreRelationalRepository<CustomerEntity>, ICustomerRepository
    {
        public CustomerRepository(DatabaseContext context) : base(context)
        {
        }       
    }
}
