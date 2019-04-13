var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { EventEmitter, Input, Output } from "@angular/core";
export class AppBaseComponent {
    constructor() {
        this.changed = new EventEmitter();
        this.onChange = (_) => { };
        this.onTouched = () => { };
    }
    get ngModel() {
        return this.model;
    }
    set ngModel(model) {
        if (model === this.model) {
            return;
        }
        this.model = model;
        this.onChange(model);
    }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { this.onTouched = fn; }
    setDisabledState(_) { }
    writeValue(model) {
        this.ngModel = model;
        this.changed.emit(model);
    }
}
__decorate([
    Input(),
    __metadata("design:type", Object)
], AppBaseComponent.prototype, "disabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AppBaseComponent.prototype, "name", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AppBaseComponent.prototype, "required", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], AppBaseComponent.prototype, "changed", void 0);
//# sourceMappingURL=base.component.js.map