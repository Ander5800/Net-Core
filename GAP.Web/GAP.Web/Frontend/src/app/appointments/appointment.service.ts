import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { ToastService } from '../core';
import { Appointment } from '../core';

const api = 'http://localhost:50448/api/appointments';

@Injectable({ providedIn: 'root' })
export class AppointmentService {
  constructor(private http: HttpClient, private toastService: ToastService) { }

  getAll(customerId: number) {
    const url = `${api}/${customerId}`;
    const msg = 'appointments retrieved successfully!';
    return this.http
      .get<Appointment[]>(url)
      .pipe(
        tap(() => this.toastService.openSnackBar(msg, 'GET')),
        catchError(this.handleError)
      );
  }

  private handleError(res: HttpErrorResponse) {
    console.error(res.error);
    return observableThrowError(res.error || 'Server error');
  }

  add(appointment: Appointment) {
    return this.http
      .post<Appointment>(`${api}`, appointment)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(`Appointment ${appointment.appointmentDate} added`, 'POST')
        )
      );
  }

  update(appointment: Appointment) {
    return this.http
      .put<Appointment>(`${api}/appointment/${appointment.appointmentId}`, appointment)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(`Appointment ${appointment.appointmentDate} updated`, 'PUT')
        )
      );
  }
}
