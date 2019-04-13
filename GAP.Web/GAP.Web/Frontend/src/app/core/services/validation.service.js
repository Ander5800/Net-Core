var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from "@angular/core";
let AppValidationService = class AppValidationService {
    constructor() {
        this.date = /^((((0?[1-9]|[12]\d|3[01])[\.\-\/](0?[13578]|1[02])[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|[12]\d|30)[\.\-\/](0?[13456789]|1[012])[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|1\d|2[0-8])[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|(29[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00)))|(((0[1-9]|[12]\d|3[01])(0[13578]|1[02])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|[12]\d|30)(0[13456789]|1[012])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|1\d|2[0-8])02((1[6-9]|[2-9]\d)?\d{2}))|(2902((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00)))) ?((20|21|22|23|[01]\d|\d)(([:.][0-5]\d){1,2}))?$/;
        this.decimal = /^((-?[1-9]+)|[0-9]+)(\.?|\,?)([0-9]*)$/;
        this.email = /^([a-z0-9_\.\-]{3,})@([\da-z\.\-]{3,})\.([a-z\.]{2,6})$/;
        this.hex = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/;
        this.integer = /^-?[0-9]+$/;
        this.tag = /^<([a-z1-6]+)([^<]+)*(?:>(.*)<\/\1>| *\/>)$/;
        this.time = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
        this.url = /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
        this.zeros = /^0+$/;
    }
    isDate(value) { return this.date.test(value); }
    isDecimal(value) { return this.decimal.test(value); }
    isEmail(value) { return this.email.test(value); }
    isEmpty(value) { return !value || value.toString().trim() === ""; }
    isHex(value) { return this.hex.test(value); }
    isInteger(value) { return this.integer.test(value); }
    isMax(value, max) { return (!value || !max) || (parseFloat(value) <= parseFloat(max)); }
    isMin(value, min) { return (!value || !min) || (parseFloat(value) >= parseFloat(min)); }
    isZeros(value) { return this.zeros.test(value); }
    isTag(value) { return this.tag.test(value); }
    isTime(value) { return this.time.test(value); }
    isUrl(value) { return this.url.test(value); }
};
AppValidationService = __decorate([
    Injectable({ providedIn: "root" })
], AppValidationService);
export { AppValidationService };
//# sourceMappingURL=validation.service.js.map