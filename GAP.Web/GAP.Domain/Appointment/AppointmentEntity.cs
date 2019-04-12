using GAP.Model;
using System;

namespace GAP.Domain
{
    public class AppointmentEntity
    {
        public AppointmentEntity
        (
            long appointmentId,
            long customerId,
            DateTime appointmentDate,
            Status status
        )
        {
            AppointmentId = appointmentId;
            CustomerId = customerId;
            AppointmentDate = appointmentDate;
            Status = status;
        }

        public AppointmentEntity() { }

        public long AppointmentId { get; private set; }

        public long CustomerId { get; private set; }

        public Status Status { get; private set; }

        public DateTime AppointmentDate { get; private set; }

        public CustomerEntity Customer { get; private set; }


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
