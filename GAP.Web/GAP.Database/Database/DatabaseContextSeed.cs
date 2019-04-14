using GAP.Domain;
using GAP.Model;
using Microsoft.EntityFrameworkCore;

namespace GAP.Infrastructure
{
    public static class DatabaseContextSeed
    {
        public static void Seed(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserEntity>(x =>
            {
                x.HasData(new
                {
                    UserId = 1L,
                    Email = "administrator@administrator.com",
                    Roles = Roles.User | Roles.Admin,
                    Status = Status.Active
                });

                x.OwnsOne(y => y.FullName).HasData(new
                {
                    UserEntityUserId = 1L,
                    Name = "Administrator",
                    Surname = "Administrator"
                });

                x.OwnsOne(y => y.SignIn).HasData(new
                {
                    UserEntityUserId = 1L,
                    Login = "admin",
                    Password = "1h0ATANFe6x7kMHo1PURE74WI0ayevUwfK/+Ie+IWX/xWrFWngcVUwL/ewryn38EMVMQBFaNo4SaVwgXaBWnDw=="
                });
            });

            modelBuilder.Entity<Domain.DepartmentType>(x =>
            {
                x.HasData(new
                {
                    Id = 1,
                    Name = "General",
                }, new
                {
                    Id = 2,
                    Name = "Odontology",
                }, new
                {
                    Id = 3,
                    Name = "Pediatrics",
                }, new
                {
                    Id = 4,
                    Name = "Neurology",
                });
            });

            modelBuilder.Entity<CustomerEntity>(x =>
            {
                x.HasData(new
                {
                    CustomerId = 1L,
                    FullName = "Anderson Chica",
                    Email = "anderson.chica@hotmail.com"
                }, new
                {
                    CustomerId = 2L,
                    FullName = "Carlos Upegui",
                    Email = "carlos.upegui@hotmail.com"
                }, new
                {
                    CustomerId = 3L,
                    FullName = "David Jaramillo",
                    Email = "david.jaramillo@hotmail.com"
                }, new
                {
                    CustomerId = 4L,
                    FullName = "Juan Patiño",
                    Email = "juan.patino@hotmail.com"
                });
            });

        }
    }
}
