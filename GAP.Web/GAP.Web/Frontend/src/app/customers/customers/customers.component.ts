import { Component, OnInit } from '@angular/core';
import { Customer } from '../../core';
import { CustomerService } from '../customer.service';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  selected: Customer;
  customers: Customer[];
  loading: boolean;

  constructor(private customerService: CustomerService,
    private router: Router) { }

  ngOnInit() {
    this.getCustomers();
  }

  add(customer: Customer) {
    this.loading = true;
    this.customerService
      .add(customer)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(addedCustomer => (this.customers = this.customers.concat(addedCustomer)));
  }

  close() {
    this.selected = null;
  }

  enableAddMode() {
    this.selected = <any>{};
  }

  getCustomers() {
    this.loading = true;
    this.customerService
      .getAll()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(customers => (this.customers = customers));
    this.close();
  }

  select(customer: Customer) {
    this.selected = customer;
  }

  update(customer: Customer) {
    this.loading = true;
    this.customerService
      .update(customer)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(
        () =>
          (this.customers = this.customers.map(h => (h.customerId === customer.customerId ? customer : h)))
      );
  }

  addAppointment(customer: Customer) {
    this.router.navigate(['appointments', customer.customerId]);
  }
}
