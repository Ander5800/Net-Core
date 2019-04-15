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
    this.toastService.openSnackBar(res.error, 'Error');
    return observableThrowError(res.error || 'Server error');
  }

  add(appointment: Appointment) {
    return this.http
      .post<Appointment>(`${api}`, appointment)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(`Appointment added`, 'POST'),
          catchError(this.handleError)
        )
      );
  }

  delete(appointmentId: number) {
    return this.http
      .delete<number>(`${api}/${appointmentId}`)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(`Appointment deleted`, 'DELETE'),
          catchError(this.handleError)
        )
      );
  }
}
