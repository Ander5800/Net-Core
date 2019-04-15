import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { TokenService } from './token.service';
import { SignIn, Token, ToastService } from '../core';
import { tap, catchError } from 'rxjs/operators';
import { throwError as observableThrowError } from 'rxjs';

const api = 'http://localhost:50448/users/';

@Injectable({ providedIn: 'root' })
export class UserService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private tokenService: TokenService,
    private toastService: ToastService) { }

  signIn(signInModel: SignIn) {
    const msg = 'Welcome!';
    return this.http
      .post<Token>(`${api}SignIn`, signInModel)
      .pipe(
        tap(() => this.toastService.openSnackBar(msg, 'GET')),
        catchError(this.handleError.bind(this))
      );
  }

  signOut() {
    if (this.tokenService.any()) {
      this.http.post(`${api}SignOut`, {}).subscribe();
    }

    this.tokenService.clear();
    this.router.navigate(['/login']);
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
