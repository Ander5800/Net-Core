import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatTooltipModule,
  MatDialogModule,
  MatTableModule,
  MatProgressBarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  declarations: []
})
export class MaterialModule { }
