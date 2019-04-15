﻿using DotNetCore.AspNetCore;
using DotNetCore.EntityFrameworkCore;
using DotNetCore.IoC;
using GAP.Application;
using GAP.Domain;
using GAP.Infrastructure;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;

namespace GAP.Web
{
    public static class Extensions
    {
        public static void AddApplicationServices(this IServiceCollection services)
        {
            services.AddMatchingInterface(typeof(ICustomerApplicationService).Assembly);
            services.AddMatchingInterface(typeof(IAppointmentApplicationService).Assembly);
            services.AddMatchingInterface(typeof(IUserApplicationService).Assembly);
            services.AddMatchingInterface(typeof(IDepartmentApplicationService).Assembly);
        }

        public static void AddDatabaseContext(this IServiceCollection services, IConfiguration configuration)
        {
            var connectionString = configuration.GetConnectionString(nameof(DatabaseContext));

            services.AddDbContextMigrate<DatabaseContext>(options =>
                options
                .ConfigureWarningsAsErrors()
                .UseSqlServer(connectionString));
        }

        public static void AddDatabaseServices(this IServiceCollection services)
        {
            services.AddMatchingInterface(typeof(IDatabaseUnitOfWork).Assembly);
        }

        public static void AddDomainServices(this IServiceCollection services)
        {
            services.AddMatchingInterface(typeof(IUserDomainService).Assembly);
        }

        public static void AddJsonWebToken(this IServiceCollection services)
        {
            services.AddJsonWebToken(Guid.NewGuid().ToString(), TimeSpan.FromHours(12));
        }

        public static void AddSpa(this IServiceCollection services)
        {
            services.AddSpaStaticFiles("Frontend/dist");
        }

        //public static void UseHealthChecks(this IApplicationBuilder application)
        //{
        //    application.UseHealthChecks("/health");
        //}

        public static void UseSpa(this IApplicationBuilder application, IHostingEnvironment environment)
        {
            application.UseSpaAngularServer(environment, "Frontend", "serve");
        }
    }
}
