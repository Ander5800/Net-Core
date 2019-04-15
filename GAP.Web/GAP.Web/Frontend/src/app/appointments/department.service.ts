import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ToastService } from '../core';
import { Department } from '../core';

const api = 'http://localhost:50448/api/departments';

@Injectable({ providedIn: 'root' })
export class DepartmentService {
  constructor(private http: HttpClient, private toastService: ToastService) { }

  getAll() {
    const url = `${api}`;
    return this.http
      .get<Department[]>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(res: HttpErrorResponse) {
    console.error(res.error);
    this.toastService.openSnackBar(res.error, 'Error');
    return observableThrowError(res.error || 'Server error');
  }
}
