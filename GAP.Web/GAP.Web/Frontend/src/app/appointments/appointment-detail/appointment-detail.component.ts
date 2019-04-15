import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, SimpleChanges, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Appointment, Department } from '../../core';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-appointment-detail',
  templateUrl: './appointment-detail.component.html',
  styleUrls: ['./appointment-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class AppointmentDetailComponent implements OnChanges {

  @Input() appointment: Appointment;

  @Output() unselect = new EventEmitter<string>();
  @Output() add = new EventEmitter<Appointment>();
  @Output() update = new EventEmitter<Appointment>();

  @ViewChild('appointmentDate') nameElement: ElementRef;

  departments: Department[];

  addMode = false;
  form = this.fb.group({
    appointmentDate: ['', Validators.required],
    department: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private departmentService: DepartmentService) {

    this.departmentService.getAll()
      .subscribe(departments => this.departments = departments);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.setFocus();
    if (this.appointment && this.appointment.customerId) {
      this.form.patchValue(this.appointment);
      this.addMode = false;
    } else {
      this.form.reset();
      this.addMode = true;
    }
  }

  addAppointment(form: FormGroup) {
    const { value, valid, touched } = form;
    if (touched && valid) {
      this.add.emit({ ...this.appointment, ...value });
    }
    this.close();
  }

  close() {
    this.unselect.emit();
  }

  saveAppointment(form: FormGroup) {
    if (this.addMode) {
      this.addAppointment(form);
    } else {
      this.updateAppointment(form);
    }
  }

  setFocus() {
    this.nameElement.nativeElement.focus();
  }

  updateAppointment(form: FormGroup) {
    const { value, valid, touched } = form;
    if (touched && valid) {
      this.update.emit({ ...this.appointment, ...value });
    }
    this.close();
  }
}
