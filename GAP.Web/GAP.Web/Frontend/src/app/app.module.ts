import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { LoginComponent } from './core/login/login.component';
import { LayoutComponent } from './core/layouts/layout/layout.component';
import { AuthGuard, } from './core/guard.service';
import { AppHttpInterceptor } from './core/interceptor/http.interceptor';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  {
    path: '', component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'customers', loadChildren: 'app/customers/customers.module#CustomersModule', canActivate: [AuthGuard] },
      { path: 'appointments/:id', loadChildren: 'app/appointments/appointments.module#AppointmentsModule', canActivate: [AuthGuard] }
    ],
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuard, { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true }],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
