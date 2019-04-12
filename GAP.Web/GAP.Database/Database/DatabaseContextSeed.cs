﻿using GAP.Domain;
using GAP.Model;
using Microsoft.EntityFrameworkCore;

namespace GAP.Database.Database
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
        }
    }
}
