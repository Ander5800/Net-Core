var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { AppFileService } from "src/app/services/file.service";
let AppUploadComponent = class AppUploadComponent {
    constructor(appFileService) {
        this.appFileService = appFileService;
        this.progress = 0;
    }
    upload(files) {
        this.appFileService.upload(files).subscribe((progress) => {
            this.progress = progress;
        });
    }
};
AppUploadComponent = __decorate([
    Component({ selector: "app-upload", templateUrl: "./upload.component.html" }),
    __metadata("design:paramtypes", [AppFileService])
], AppUploadComponent);
export { AppUploadComponent };
//# sourceMappingURL=upload.component.js.map