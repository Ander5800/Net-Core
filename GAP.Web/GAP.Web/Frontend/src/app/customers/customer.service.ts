import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { ToastService } from '../core';
import { Customer } from '../core';

const api = 'http://localhost:50448/api/customers';

@Injectable({ providedIn: 'root' })
export class CustomerService {
  constructor(private http: HttpClient, private toastService: ToastService) {}

  getAll() {
    const url = `${api}`;
    const msg = 'customers retrieved successfully!';
    return this.http
      .get<Customer[]>(url)
      .pipe(
        tap(() => this.toastService.openSnackBar(msg, 'GET')),
        catchError(this.handleError)
      );
  }

  private handleError(res: HttpErrorResponse) {
    console.error(res.error);
    return observableThrowError(res.error || 'Server error');
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
}
