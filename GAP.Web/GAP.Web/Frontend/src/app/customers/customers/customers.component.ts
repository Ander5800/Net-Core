import { Component, OnInit } from '@angular/core';
import { Customer } from '../../core';
import { CustomerService } from '../customer.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  selected: Customer;
  customers: Customer[];
  loading: boolean;

  constructor(private customerService: CustomerService) { }

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
      .subscribe(heroes => (this.customers = heroes));
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
}
