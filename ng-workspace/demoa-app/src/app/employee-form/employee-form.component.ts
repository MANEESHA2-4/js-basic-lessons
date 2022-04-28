import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControlOptions } from '@angular/forms';
import { rangeValidator, emailMatchValidator } from '../my-validator';
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  employeeFormGroup: FormGroup;
  empRecord: any = {
    firstName: 'Maneesha',
    lastName: 'Manikandan',
    email: 'maneesha28@.com',
    mobile: '6382751392'
  }
  constructor(private fb: FormBuilder) {
    this.employeeFormGroup = this.fb.group({
      firstName: [this.empRecord.firstName, [Validators.required, Validators.minLength(3)]],
      lastName: [this.empRecord.lastName],
      emailGroup: this.fb.group({
        email: [this.empRecord.email, [Validators.required, Validators.email]],
        confirmEmail: ['', [Validators.required, Validators.email]]
      }, { validators: emailMatchValidator }),
      mobile: [this.empRecord.mobile],
      sendNotification: ['email'],
      range: ['', [rangeValidator(10, 20)]]
    });
  }

  ngOnInit(): void {
  }
  get firstName() { return this.employeeFormGroup.get('firstName')!; }
  get email() { return this.employeeFormGroup.get('email')!; }
  get mobile() { return this.employeeFormGroup.get('mobile')!; }
  get range() { return this.employeeFormGroup.get('range')!; }
  get emailGroup() { return this.employeeFormGroup.get('emailGroup')!; }
  loadEmployee() {
    let data = {
      fName: 'Maneesha',
      lastName: 'Manikandan'
    }
    this.employeeFormGroup.patchValue(data);
  }
  doNotification(msgtype: any) {
    if (msgtype === 'sms') {
      let mobileControl = this.employeeFormGroup.get('mobile');
      mobileControl?.setValidators([Validators.required, rangeValidator(8000000000, 9999999999)]);
      mobileControl?.updateValueAndValidity();
    }
  }



}


// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-employee-form',
//   templateUrl: './employee-form.component.html',
//   styleUrls: ['./employee-form.component.css']
// })
// export class EmployeeFormComponent implements OnInit {

//   employeeFormGroup: FormGroup;


// }

// ngOnInit(): void {

// }



