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

  displayedColumns: string[] = ['nit', 'name', 'active', 'actions'];

  constructor(public dialog: MatDialog) { }

  byId(customer: Customer) {
    return customer.customerId;
  }

  select(customer: Customer) {
    this.selected.emit(customer);
  }

  // deleteHero(customer: Customer) {
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.disableClose = true;
  //   dialogConfig.autoFocus = true;
  //   dialogConfig.width = '250px';
  //   dialogConfig.data = {
  //     title: 'Delete Hero',
  //     message: `Do you want to delete ${customer.fullName}`
  //   };

  //   const dialogRef = this.dialog.open(ModalComponent, dialogConfig);

  //   dialogRef.afterClosed().subscribe(deleteIt => {
  //     console.log('The dialog was closed');
  //     if (deleteIt) {
  //       this.deleted.emit(customer);
  //     }
  //   });
  // }
}