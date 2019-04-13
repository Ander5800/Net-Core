var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, HostListener } from "@angular/core";
import { AppValidationDirective } from "./validation.directive";
let AppDecimalValidationDirective = class AppDecimalValidationDirective extends AppValidationDirective {
    ngOnInit() {
        this.cleave = new this.Cleave(this.selector, {
            delimiter: ".",
            numeral: true,
            numeralDecimalMark: ",",
            numeralDecimalScale: 2,
            numeralIntegerScale: 20,
        });
    }
    onBlur() { this.setRawValue(); }
};
__decorate([
    HostListener("blur"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppDecimalValidationDirective.prototype, "onBlur", null);
AppDecimalValidationDirective = __decorate([
    Directive({ selector: "[appDecimalValidation]" })
], AppDecimalValidationDirective);
export { AppDecimalValidationDirective };
//# sourceMappingURL=decimal.directive.js.map