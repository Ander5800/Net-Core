using GAP.Infrastructure;
using GAP.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GAP.Application
{
    public sealed class DepartmentApplicationService : BaseApplicationService, IDepartmentApplicationService
    {
        public DepartmentApplicationService(IDepartmentRepository departmentRepository, IDatabaseUnitOfWork databaseUnitOfWork)
        {
            DepartmentRepository = departmentRepository;
            DatabaseUnitOfWork = databaseUnitOfWork;
        }

        private IDepartmentRepository DepartmentRepository { get; }
        private IDatabaseUnitOfWork DatabaseUnitOfWork { get; }

        public async Task<IEnumerable<DepartmentType>> ListAsync()
        {
            return await DepartmentRepository.ListAsync<DepartmentType>();
        }
    }
}
