import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Customer } from '../../core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent {

  @Input() customers: Customer[];
  @Input() selectedCustomer: Customer;

  @Output() deleted = new EventEmitter<Customer>();
  @Output() selected = new EventEmitter<Customer>();
  @Output() addAppointment = new EventEmitter<Customer>();

  displayedColumns: string[] = ['name', 'email', 'actions'];

  constructor(public dialog: MatDialog) { }

  byId(customer: Customer) {
    return customer.customerId;
  }

  select(customer: Customer) {
    this.selected.emit(customer);
  }

  onAddAppointment(customer: Customer) {
    this.addAppointment.emit(customer);
  }
}
