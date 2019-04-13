var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppCurrencyValidationDirective } from "./currency.directive";
import { AppDateValidationDirective } from "./date.directive";
import { AppDecimalValidationDirective } from "./decimal.directive";
import { AppIntegerValidationDirective } from "./integer.directive";
let AppValidationModule = class AppValidationModule {
};
AppValidationModule = __decorate([
    NgModule({
        declarations: [
            AppCurrencyValidationDirective,
            AppDateValidationDirective,
            AppDecimalValidationDirective,
            AppIntegerValidationDirective
        ],
        exports: [
            AppCurrencyValidationDirective,
            AppDateValidationDirective,
            AppDecimalValidationDirective,
            AppIntegerValidationDirective
        ],
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule
        ]
    })
], AppValidationModule);
export { AppValidationModule };
//# sourceMappingURL=validation.module.js.map