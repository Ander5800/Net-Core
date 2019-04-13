var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppCoreModule } from "src/app/core/core.module";
import { AppValidationModule } from "src/app/directives/validation/validation.module";
import { AppValidateComponent } from "./validate.component";
const routes = [
    { path: "", component: AppValidateComponent }
];
let AppValidateModule = class AppValidateModule {
};
AppValidateModule = __decorate([
    NgModule({
        declarations: [AppValidateComponent],
        imports: [
            RouterModule.forChild(routes),
            AppCoreModule,
            AppValidationModule
        ]
    })
], AppValidateModule);
export { AppValidateModule };
//# sourceMappingURL=validate.module.js.map