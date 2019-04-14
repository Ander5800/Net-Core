using System;

namespace GAP.Model
{
    public sealed class AddAppointmentModel
    {
        public long CustomerId { get; set; }

        public DateTime AppointmentDate { get; set; }

        public DepartmentType Department { get; set; }
    }
}
