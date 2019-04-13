var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AppTokenService } from "../core/services/token.service";
let AppUserService = class AppUserService {
    constructor(http, router, appTokenService) {
        this.http = http;
        this.router = router;
        this.appTokenService = appTokenService;
        this.BaseURI = 'http://localhost:50448/api';
    }
    add(addUserModel) {
        return this.http.post(`Users`, addUserModel);
    }
    delete(userId) {
        return this.http.delete(`Users/${userId}`);
    }
    list() {
        return this.http.get(this.BaseURI + `/customers`);
    }
    select(userId) {
        return this.http.get(`Users/${userId}`);
    }
    signIn(signInModel) {
        this.http
            .post(`Users/SignIn`, signInModel)
            .subscribe((tokenModel) => {
            if (tokenModel && tokenModel.token) {
                this.appTokenService.set(tokenModel.token);
                this.router.navigate(["/main/home"]);
            }
        });
    }
    signOut() {
        if (this.appTokenService.any()) {
            this.http.post(`Users/SignOut`, {}).subscribe();
        }
        this.appTokenService.clear();
        this.router.navigate(["/login"]);
    }
    update(updateUserModel) {
        return this.http.put(`Users/${updateUserModel.userId}`, updateUserModel);
    }
};
AppUserService = __decorate([
    Injectable({ providedIn: "root" }),
    __metadata("design:paramtypes", [HttpClient,
        Router,
        AppTokenService])
], AppUserService);
export { AppUserService };
//# sourceMappingURL=user.service.js.map