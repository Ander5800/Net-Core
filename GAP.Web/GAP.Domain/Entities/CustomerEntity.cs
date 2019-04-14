using GAP.Domain.ValueObjects;
using GAP.Model;
using System;
using System.Collections.Generic;

namespace GAP.Domain
{
    public class CustomerEntity
    {
        public CustomerEntity
        (
            long customerId,
            string fullName,
            string email
        )
        {
            CustomerId = customerId;
            FullName = fullName;
            Email = email;
        }

        public CustomerEntity() { }

        public long CustomerId { get; private set; }

        public string FullName { get; private set; }

        public string Email { get; private set; }        

        public ICollection<AppointmentEntity> Appointments { get; private set; }
        
    }
}
