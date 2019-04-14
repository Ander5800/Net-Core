import { Component, OnInit } from '@angular/core';
import { Appointment } from '../../core';
import { finalize } from 'rxjs/operators';
import { AppointmentService } from '../appointment.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {

  customerId: number;
  selected: Appointment;
  appointments: Appointment[];
  loading: boolean;

  constructor(private appointmentService: AppointmentService,
    private route: ActivatedRoute) {
    this.customerId = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.getAppointments();
  }

  add(appointment: Appointment) {
    this.loading = true;
    this.appointmentService
      .add(appointment)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(addedCustomer => (this.appointments = this.appointments.concat(addedCustomer)));
  }

  close() {
    this.selected = null;
  }

  enableAddMode() {
    this.selected = <any>{};
  }

  getAppointments() {

    this.loading = true;
    this.appointmentService
      .getAll(this.customerId)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(appointments => (this.appointments = appointments));
    this.close();
  }

  select(appointment: Appointment) {
    this.selected = appointment;
  }

  update(appointment: Appointment) {
    this.loading = true;
    this.appointmentService
      .update(appointment)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(
        () =>
          (this.appointments = this.appointments.map(h => (h.appointmentId === appointment.appointmentId ? appointment : h)))
      );
  }
}
