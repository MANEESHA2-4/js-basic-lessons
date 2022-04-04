import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  customerModel: any;
  constructor() { }

  ngOnInit(): void {
    this.customerModel = {
      firstName: 'maneesha',
      lastName: 'manikandan',
      email: 'maneeshamanikandan28@gmail.com'
    }
  }
  saveCustomer(customerFormGroup: any) {
    if (customerFormGroup.valid) {
      console.log(customerFormGroup.value);
    }
  }
}
