import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenService } from './token.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private readonly router: Router,
        private readonly tokenService: TokenService) { }

    canActivate() {
        if (this.tokenService.any()) { return true; }
        this.router.navigate(['/login']);
        return false;
    }
}
