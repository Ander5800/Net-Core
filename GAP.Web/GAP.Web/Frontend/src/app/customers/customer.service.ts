import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { ToastService } from '../core';
import { Customer } from '../core';
import { Router } from '@angular/router';

const api = 'http://localhost:50448/api/customers';

@Injectable({ providedIn: 'root' })
export class CustomerService {
  constructor(private http: HttpClient,
    private toastService: ToastService,
    private router: Router) { }

  getAll() {
    const url = `${api}`;
    const msg = 'customers retrieved successfully!';
    return this.http
      .get<Customer[]>(url)
      .pipe(
        tap(() => this.toastService.openSnackBar(msg, 'GET')),
        catchError(this.handleError.bind(this))
      );
  }

  add(customer: Customer) {
    return this.http
      .post<Customer>(`${api}`, customer)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(`Customer ${customer.fullName} added`, 'POST')
        )
      );
  }

  update(customer: Customer) {
    return this.http
      .put<Customer>(`${api}/customer/${customer.customerId}`, customer)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(`Customer ${customer.fullName} updated`, 'PUT')
        )
      );
  }

  private handleError(res: HttpErrorResponse) {
    if (res.status === 401) {
      this.toastService.openSnackBar('Unauthorized', 'Error');
      return observableThrowError('Unauthorized');
    }

    this.toastService.openSnackBar(res.error, 'Error');
    return observableThrowError(res.error || 'Server error');
  }
}


