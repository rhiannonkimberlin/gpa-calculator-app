/*
============================================
; Title:  kimberlin-assignment-6.4
; Author: Professor Krasso
; Date:   February 4 2021
; Modified By: Rhiannon Kimberlin
; Description: gpa-calculator-app2
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})

export class BaseLayoutComponent implements OnInit {

  assignment: string; 

  constructor(private cookieService: CookieService, private router : Router) {
    //Assignment Name Displays in base-layout.component.html
    this.assignment= 'Exercise 7.3 - GPA Calculator'
   }

  ngOnInit(): void {
  }

  signOut() {
    this.cookieService.deleteAll();
    this.router.navigate(['/session/sign-in'])
  }
}
