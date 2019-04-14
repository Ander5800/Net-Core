import { Component, Input, Output, EventEmitter, ViewChild, OnChanges, ElementRef, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { Customer } from '../../core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerDetailComponent implements OnChanges {

  @Input() customer: Customer;

  @Output() unselect = new EventEmitter<string>();
  @Output() add = new EventEmitter<Customer>();
  @Output() update = new EventEmitter<Customer>();

  @ViewChild('name') nameElement: ElementRef;

  addMode = false;

  form = this.fb.group({
    customerId: [],
    fullName: ['', Validators.required],
    saying: ['']
  });

  constructor(private fb: FormBuilder) { }

  ngOnChanges(changes: SimpleChanges) {
    this.setFocus();
    if (this.customer && this.customer.customerId) {
      this.form.patchValue(this.customer);
      this.addMode = false;
    } else {
      this.form.reset();
      this.addMode = true;
    }
  }

  addCustomer(form: FormGroup) {
    const { value, valid, touched } = form;
    if (touched && valid) {
      this.add.emit({ ...this.customer, ...value });
    }
    this.close();
  }

  close() {
    this.unselect.emit();
  }

  saveCustomer(form: FormGroup) {
    if (this.addMode) {
      this.addCustomer(form);
    } else {
      this.updateCustomer(form);
    }
  }

  setFocus() {
    this.nameElement.nativeElement.focus();
  }

  updateCustomer(form: FormGroup) {
    const { value, valid, touched } = form;
    if (touched && valid) {
      this.update.emit({ ...this.customer, ...value });
    }
    this.close();
  }
}
