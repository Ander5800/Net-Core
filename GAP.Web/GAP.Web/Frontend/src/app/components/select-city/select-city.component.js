var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AppSelectCityComponent_1;
import { Component } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { of } from "rxjs";
import { OptionModel } from "../select/option.model";
import { AppSelectComponent } from "../select/select.component";
let AppSelectCityComponent = AppSelectCityComponent_1 = class AppSelectCityComponent extends AppSelectComponent {
    getOptions(filter) {
        let options = new Array();
        options.push(new OptionModel("City 1", "1"));
        options.push(new OptionModel("City 2", "2"));
        options.push(new OptionModel("City 3", "3"));
        options = options.filter((option) => option.value === filter);
        return of(options);
    }
};
AppSelectCityComponent = AppSelectCityComponent_1 = __decorate([
    Component({
        providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: AppSelectCityComponent_1, multi: true }],
        selector: "app-select-city",
        templateUrl: "../select/select.component.html"
    })
], AppSelectCityComponent);
export { AppSelectCityComponent };
//# sourceMappingURL=select-city.component.js.map