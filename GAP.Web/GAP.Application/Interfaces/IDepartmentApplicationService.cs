using GAP.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GAP.Application
{
    public interface IDepartmentApplicationService
    {
        Task<IEnumerable<DepartmentType>> ListAsync();
    }
}
