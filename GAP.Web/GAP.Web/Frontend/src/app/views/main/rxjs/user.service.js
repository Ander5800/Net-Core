var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from "@angular/core";
import { forkJoin, from, of } from "rxjs";
import { map, mergeMap, switchMap, tap, toArray } from "rxjs/operators";
let UserService = class UserService {
    getUsersCitiesCompanies() {
        return this.getUsers().pipe(switchMap((users) => from(users)), mergeMap((user) => forkJoin(this.getUsersCities(user.userId), this.getUsersCompanies(user.userId)).pipe(map((data) => ({ user, cities: data[0], companies: data[1] })), tap((data) => data.user.cities = data.cities), tap((data) => data.user.companies = data.companies), map((data) => data.user))), toArray());
    }
    getUsers() {
        const list = [
            { userId: 1, name: "Name 1" },
            { userId: 2, name: "Name 2" }
        ];
        return of(list);
    }
    getUsersCities(userId) {
        let list = [
            { userId: 1, name: "City 1" },
            { userId: 2, name: "City 2" }
        ];
        list = list.filter((user) => user.userId === userId);
        return of(list);
    }
    getUsersCompanies(userId) {
        let list = [
            { userId: 1, name: "Company 1" },
            { userId: 2, name: "Company 2" }
        ];
        list = list.filter((user) => user.userId === userId);
        return of(list);
    }
};
UserService = __decorate([
    Injectable({ providedIn: "root" })
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map