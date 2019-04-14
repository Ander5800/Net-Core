using GAP.Model;
using System;

namespace GAP.Domain
{
    public class AppointmentEntity
    {
        public AppointmentEntity
        (
            long customerId,
            DateTime appointmentDate,
            int departmentTypeId
        )
        {
            CustomerId = customerId;
            AppointmentDate = appointmentDate;
            DepartmentTypeId = departmentTypeId;
        }

        public AppointmentEntity() { }

        public long AppointmentId { get; private set; }

        public long CustomerId { get; private set; }

        public int DepartmentTypeId { get; private set; }

        public DateTime AppointmentDate { get; private set; }

        public CustomerEntity Customer { get; private set; }

        public DepartmentType Department { get; private set; }
    }
}
