using System.Threading.Tasks;

namespace GAP.Database.Database
{
    public interface IDatabaseUnitOfWork
    {
        int SaveChanges();

        Task<int> SaveChangesAsync();
    }
}
