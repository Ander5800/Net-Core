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
import { Component } from "@angular/core";
let AppServiceComponent = class AppServiceComponent {
    constructor(http) {
        this.http = http;
        this.get().subscribe((response) => this.list = response);
    }
    get() {
        return this.http.get("https://jsonplaceholder.typicode.com/users");
    }
};
AppServiceComponent = __decorate([
    Component({ selector: "app-service", templateUrl: "./service.component.html" }),
    __metadata("design:paramtypes", [HttpClient])
], AppServiceComponent);
export { AppServiceComponent };
//# sourceMappingURL=service.component.js.map