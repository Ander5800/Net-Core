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
            FullName fullName,
            string email,
            Status status,
            string nit,
            DateTime BirthDate
        )
        {
            CustomerId = customerId;
            FullName = fullName;
            Email = email;
            Nit = nit;
            Status = status;
        }

        public CustomerEntity() { }

        public long CustomerId { get; private set; }

        public FullName FullName { get; private set; }

        public string Email { get; private set; }

        public Status Status { get; private set; }

        public DateTime BirthDay { get; private set; }

        public string Nit { get; private set; }

        public DocumentType DocumentType { get; private set; }

        public ICollection<AppointmentEntity> Appointments { get; private set; }
        
        public void Add()
        {
            CustomerId = 0;
            Status = Status.Active;
        }

        public void Inactivate()
        {
            Status = Status.Inactive;
        }
    }
}
