var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ErrorHandler, NgModule } from "@angular/core";
import { AppErrorHandler } from "./error.handler";
let AppHandlersModule = class AppHandlersModule {
};
AppHandlersModule = __decorate([
    NgModule({
        providers: [
            { provide: ErrorHandler, useClass: AppErrorHandler }
        ]
    })
], AppHandlersModule);
export { AppHandlersModule };
//# sourceMappingURL=handlers.module.js.map