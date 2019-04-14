using GAP.Model;
using System;

namespace GAP.Domain
{
    public static class AppointmentFactory
    {
        public static AppointmentEntity Create(long appointmentId)
        {
            return new AppointmentEntity(appointmentId, DateTime.Now, DepartmentType.General.Id);
        }

        public static AppointmentEntity Create(AddAppointmentModel addAppointmentModel)
        {
            return new AppointmentEntity
            (
                addAppointmentModel.CustomerId,
                addAppointmentModel.AppointmentDate,
                addAppointmentModel.Department.Id
            );
        }
    }
}
