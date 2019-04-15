using DotNetCore.EntityFrameworkCore;
using GAP.Domain;

namespace GAP.Infrastructure.Repositories
{
    public sealed class DepartmentRepository : EntityFrameworkCoreRelationalRepository<DepartmentType>, IDepartmentRepository
    {
        public DepartmentRepository(DatabaseContext context) : base(context)
        {
        }
    }
}
