using GAP.Model;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

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

        private readonly int MAX_HOURS_TO_DELETE = 24;
        private readonly int MAX_HOURS_TO_CREATE = 24;
        private readonly int MIN_HOURS_TO_CREATE = -24;

        public AppointmentEntity() { }

        public long AppointmentId { get; private set; }

        public long CustomerId { get; private set; }

        public int DepartmentTypeId { get; private set; }

        public DateTime AppointmentDate { get; private set; }

        public CustomerEntity Customer { get; private set; }

        public DepartmentType Department { get; private set; }

        public bool canBeDeleted()
        {
            var totalHours = this.AppointmentDate.Subtract(DateTime.Now).TotalHours;
            return totalHours >= MAX_HOURS_TO_DELETE;
        }

        public bool canCreate(IEnumerable<AppointmentModel> appointments)
        {
            var thereIsAppointmentSameDay = appointments.Any(appointment =>
            {
                var totalHours= appointment.AppointmentDate.Subtract(this.AppointmentDate).TotalHours;
                return totalHours < MAX_HOURS_TO_CREATE && totalHours > MIN_HOURS_TO_CREATE;
            });

            return !thereIsAppointmentSameDay;
        }
    }
}
