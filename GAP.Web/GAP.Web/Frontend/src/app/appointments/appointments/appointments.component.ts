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
    appointment.customerId = this.customerId;
    this.loading = true;
    this.appointmentService
      .add(appointment)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(addedCustomer => (this.appointments = [...this.appointments, addedCustomer]));
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

  delete(appointmentDeleted: Appointment) {
    this.appointmentService
      .delete(appointmentDeleted.appointmentId)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(appointmentId => this.appointments = this.appointments.filter(appointment => appointment.appointmentId !== appointmentId));
  }
}
