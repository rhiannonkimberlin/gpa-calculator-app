/*
============================================
; Title:  kimberlin-assignment-7.3
; Author: Professor Krasso
; Date:   February 14 2021
; Modified By: Rhiannon Kimberlin
; Description: gpa-calculator-app
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { SignInService } from '../sign-in.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signinForm: FormGroup;
  errorMessage: string;

  constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private signinService: SignInService) { 
    console.log(this.cookieService.get('session_user'));
  }

  //Only accepts numerical values and is required
  ngOnInit(): void {
    this.signinForm = this.fb.group({
      studentId: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])]
    })
  }

  get form() { return this.signinForm.controls}

  //Form captures user data upon submission
  onSubmit() {
    const formValues = this.signinForm.value;
    const studentId = parseInt(formValues.studentId);

    //If ID is approved, sign in is allowed. If Id is not approved, error will display.
    if (this.signinService.validate(studentId)) {
      this.cookieService.set('session_user', studentId.toString(), 1)
      this.router.navigate(['/'])
    } else {
      this.errorMessage = 'The Student ID you entered is invalid, please try again.'
    }
  }
}
