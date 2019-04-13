var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { EventEmitter, HostListener, Output } from "@angular/core";
export class AppValidationDirective {
    constructor(el) {
        this.el = el;
        this.ngModelChange = new EventEmitter();
        this.Cleave = require("cleave.js");
        el.nativeElement.classList.add(el.nativeElement.name);
        this.selector = `.${el.nativeElement.name}`;
    }
    onInput($event) {
        this.cleave.onChange();
        this.ngModelChange.emit($event.target.value);
    }
    setRawValue() {
        const formattedValue = this.cleave.getFormattedValue();
        this.ngModelChange.emit(this.cleave.getRawValue());
        setTimeout(() => { this.el.nativeElement.value = formattedValue; }, 0);
    }
}
__decorate([
    Output(),
    __metadata("design:type", Object)
], AppValidationDirective.prototype, "ngModelChange", void 0);
__decorate([
    HostListener("input", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], AppValidationDirective.prototype, "onInput", null);
//# sourceMappingURL=validation.directive.js.map