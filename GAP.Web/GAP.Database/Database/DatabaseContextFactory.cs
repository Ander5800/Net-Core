using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace GAP.Database.Database
{
    public sealed class DatabaseContextFactory : IDesignTimeDbContextFactory<DatabaseContext>
    {
        public DatabaseContext CreateDbContext(string[] args)
        {
            const string connectionString = "Server=(localdb)\\MSSQLLocalDB;Database=GAP;Integrated Security=true;Connection Timeout=5;";
            var builder = new DbContextOptionsBuilder<DatabaseContext>();
            builder.UseSqlServer(connectionString);

            return new DatabaseContext(builder.Options);
        }
    }
}
