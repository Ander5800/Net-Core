var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppSelectCityModule } from "src/app/components/select-city/select-city.module";
import { AppSelectCountryModule } from "src/app/components/select-country/select-country.module";
import { AppSelectStateModule } from "src/app/components/select-state/select-state.module";
import { AppCoreModule } from "src/app/core/core.module";
import { AppFormComponent } from "./form.component";
const routes = [
    { path: "", component: AppFormComponent }
];
let AppFormModule = class AppFormModule {
};
AppFormModule = __decorate([
    NgModule({
        declarations: [AppFormComponent],
        imports: [
            RouterModule.forChild(routes),
            AppCoreModule,
            AppSelectCountryModule,
            AppSelectStateModule,
            AppSelectCityModule
        ]
    })
], AppFormModule);
export { AppFormModule };
//# sourceMappingURL=form.module.js.map