var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AppInputComponent_1;
import { Component, Input } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { AppBaseComponent } from "../base/base.component";
let AppInputComponent = AppInputComponent_1 = class AppInputComponent extends AppBaseComponent {
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], AppInputComponent.prototype, "type", void 0);
AppInputComponent = AppInputComponent_1 = __decorate([
    Component({
        providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: AppInputComponent_1, multi: true }],
        selector: "app-input",
        templateUrl: "./input.component.html"
    })
], AppInputComponent);
export { AppInputComponent };
//# sourceMappingURL=input.component.js.map