var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient, HttpEventType, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
let AppFileService = class AppFileService {
    constructor(http) {
        this.http = http;
    }
    upload(files) {
        if (files.length === 0) {
            return of(0);
        }
        const formData = new FormData();
        for (const file of files) {
            formData.append(file.name, file);
        }
        const request = new HttpRequest("POST", "Files", formData, { reportProgress: true, });
        return new Observable((observable) => {
            this.http.request(request).subscribe((event) => {
                if (event.type === HttpEventType.Response) {
                    return observable.next(100);
                }
                if (event.type === HttpEventType.UploadProgress && event.total) {
                    return observable.next(Math.round(100 * event.loaded / event.total));
                }
                return observable.next(0);
            });
        });
    }
};
AppFileService = __decorate([
    Injectable({ providedIn: "root" }),
    __metadata("design:paramtypes", [HttpClient])
], AppFileService);
export { AppFileService };
//# sourceMappingURL=file.service.js.map