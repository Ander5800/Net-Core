import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { ToastService } from '../core';
import { Appointment } from '../core';
import { Router } from '@angular/router';

const api = 'http://localhost:50448/api/appointments';

@Injectable({ providedIn: 'root' })
export class AppointmentService {
  constructor(private http: HttpClient,
    private toastService: ToastService,
    private router: Router) { }

  getAll(customerId: number) {
    const url = `${api}/${customerId}`;
    const msg = 'appointments retrieved successfully!';
    return this.http
      .get<Appointment[]>(url)
      .pipe(
        tap(() => this.toastService.openSnackBar(msg, 'GET')),
        catchError(this.handleError.bind(this))
      );
  }

  add(appointment: Appointment) {
    return this.http
      .post<Appointment>(`${api}`, appointment)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(`Appointment added`, 'POST'),
          catchError(this.handleError.bind(this))
        )
      );
  }

  delete(appointmentId: number) {
    appointmentId = 1000;
    return this.http
      .delete<number>(`${api}/${appointmentId}`)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(`Appointment deleted`, 'DELETE'),
          catchError(this.handleError.bind(this))
        )
      );
  }

  private handleError(res: HttpErrorResponse) {
    if (res.status === 401) {
      this.router.navigate(['/login']);
      return observableThrowError('Unauthorized');
    }

    this.toastService.openSnackBar(res.error, 'Error');
    return observableThrowError(res.error || 'Server error');
  }
}
