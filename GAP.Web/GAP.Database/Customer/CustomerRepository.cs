using DotNetCore.EntityFrameworkCore;
using GAP.Database.Database;
using GAP.Domain;

namespace GAP.Database.Customer
{
    public sealed class CustomerRepository : EntityFrameworkCoreRelationalRepository<CustomerEntity>, ICustomerRepository
    {
        public CustomerRepository(DatabaseContext context) : base(context)
        {
        }       
    }
}
