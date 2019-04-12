using DotNetCore.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace GAP.Infrastructure
{
    public sealed class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly();
            modelBuilder.Seed();
        }
    }
}
