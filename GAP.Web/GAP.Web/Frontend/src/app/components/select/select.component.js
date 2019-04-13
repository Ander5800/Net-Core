var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Input } from "@angular/core";
import { AppBaseComponent } from "../base/base.component";
export class AppSelectComponent extends AppBaseComponent {
    constructor() {
        super(...arguments);
        this.lazy = false;
        this.options = new Array();
    }
    ngOnInit() {
        if (!this.lazy) {
            this.load();
        }
    }
    change() {
        this.changed.emit(this.ngModel);
    }
    reset() {
        this.options = new Array();
        this.ngModel = null;
        this.change();
    }
    load(filter) {
        this.reset();
        if (this.lazy && !filter) {
            return;
        }
        this.getOptions(filter).subscribe((options) => {
            this.options = options;
        });
    }
}
__decorate([
    Input(),
    __metadata("design:type", Object)
], AppSelectComponent.prototype, "lazy", void 0);
//# sourceMappingURL=select.component.js.map