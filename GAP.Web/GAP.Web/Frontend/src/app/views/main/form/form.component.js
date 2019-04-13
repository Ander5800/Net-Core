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
import { FormBuilder } from "@angular/forms";
let AppFormComponent = class AppFormComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.city = "";
        this.country = "";
        this.state = "";
        this.disabled = false;
        this.form = this.formBuilder.group({
            child: this.formBuilder.group({ string: [] }),
            number: [],
            string: []
        });
        this.model = {
            child: { string: "" },
            number: 0,
            string: ""
        };
    }
    set() {
        this.country = "1";
        this.state = "1";
        this.city = "1";
    }
    submit() {
        alert("submit");
    }
};
AppFormComponent = __decorate([
    Component({ selector: "app-form", templateUrl: "./form.component.html" }),
    __metadata("design:paramtypes", [FormBuilder])
], AppFormComponent);
export { AppFormComponent };
//# sourceMappingURL=form.component.js.map