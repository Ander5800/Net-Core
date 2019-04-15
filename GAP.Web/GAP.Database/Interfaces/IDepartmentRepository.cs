using DotNetCore.Repositories;

namespace GAP.Infrastructure
{

    public interface IDepartmentRepository : IRelationalRepository<Domain.DepartmentType>
    {
    }
}
