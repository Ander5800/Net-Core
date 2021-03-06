﻿using System;

namespace GAP.Model
{
    public sealed class AppointmentModel
    {

        public long AppointmentId { get; set; }

        public long CustomerId { get; set; }

        public DateTime AppointmentDate { get; set; }

        public DepartmentType Department { get; set; }
    }
}
