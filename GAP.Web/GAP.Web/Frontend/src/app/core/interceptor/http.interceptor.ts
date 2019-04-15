import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '../token.service';


@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
    constructor(private readonly tokenService: TokenService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        request = request.clone({
            setHeaders: { Authorization: `Bearer ${this.tokenService.get()}` }
        });

        return next.handle(request);
    }
}
