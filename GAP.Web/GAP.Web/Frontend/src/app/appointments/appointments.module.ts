import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentsComponent } from './appointments/appointments.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AppointmentDetailComponent } from './appointment-detail/appointment-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: AppointmentsComponent }
];

@NgModule({
  declarations: [AppointmentsComponent, AppointmentListComponent, AppointmentDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class AppointmentsModule { }
