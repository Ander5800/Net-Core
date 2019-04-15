import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Appointment } from '../../core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent {

  @Input() appointments: Appointment[];
  @Input() selectedAppointment: Appointment;

  @Output() deleted = new EventEmitter<Appointment>();
  @Output() selected = new EventEmitter<Appointment>();
  displayedColumns: string[] = ['appointmentDate', 'department', 'actions'];

  constructor(public dialog: MatDialog) { }

  byId(appointment: Appointment) {
    return appointment.appointmentId;
  }

  select(appointment: Appointment) {
    this.selected.emit(appointment);
  }

  delete(appointment: Appointment) {
    this.deleted.emit(appointment);
  }
}
