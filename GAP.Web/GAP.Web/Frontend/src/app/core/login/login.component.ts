import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { SignIn } from '../../core';
import { TokenService } from '../token.service';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  showSpinner: boolean;
  signIn = new SignIn();

  constructor(private userService: UserService,
    private tokenService: TokenService,
    private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.showSpinner = true;
    this.userService.signIn(this.signIn)
      .pipe(finalize(() => this.showSpinner = false))
      .subscribe((tokenModel) => {
        if (tokenModel && tokenModel.token) {
          this.tokenService.set(tokenModel.token);
          this.router.navigate(['/customers']);
        }
      });
  }
}
