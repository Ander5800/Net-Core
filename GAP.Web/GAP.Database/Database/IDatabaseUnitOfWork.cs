using System.Threading.Tasks;

namespace GAP.Infrastructure
{
    public interface IDatabaseUnitOfWork
    {
        int SaveChanges();

        Task<int> SaveChangesAsync();
    }
}
