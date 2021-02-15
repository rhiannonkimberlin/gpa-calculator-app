/*
============================================
; Title:  kimberlin-assignment-7.3
; Author: Professor Krasso
; Date:   February 14 2021
; Modified By: Rhiannon Kimberlin
; Description: gpa-calculator-app
;===========================================
*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  studentIds: Array<number>;

  //These Ids must be used in order to login to the form
  constructor() {
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];
   }

   //Compares to array to find match of ids
   validate(studentId: number) {
    return this.studentIds.some(id => id === studentId)
   }
}
