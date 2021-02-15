/*
============================================
; Title:  kimberlin-assignment-7.3
; Author: Professor Krasso
; Date:   February 14 2021
; Modified By: Rhiannon Kimberlin
; Description: gpa-calculator-app
;===========================================
*/

import { TestBed } from '@angular/core/testing';

import { SignInService } from './sign-in.service';

describe('SignInService', () => {
  let service: SignInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
