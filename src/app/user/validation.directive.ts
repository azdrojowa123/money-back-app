import { Directive, forwardRef, OnInit } from '@angular/core';
import { AbstractControl, ValidationErrors, NG_VALIDATORS, Validator, FormControl } from '@angular/forms';
import { LoansService } from '../data/loans.service';
import { User } from '../listloans/listloans.component';

@Directive({
  selector: '[validUser]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: ValidationDirective, multi:true}
  ]
})
export class ValidationDirective implements Validator, OnInit {
  
  static loanService: any;

  constructor(
    private loanService:LoansService
  ){}

  ngOnInit(): void {
    this.loanService = this.loanService
    
  }

  validate(control: FormControl): ValidationErrors {
    return ValidationDirective.validateUser(control);
  }
 

  



static validateUser(control:FormControl) : ValidationErrors | null {
  
  let activeUser: User[];

  this.loanService.retrieveUsers().subscribe(res => {
    activeUser = res;
  });

  for(var i of activeUser){
    if(i.name == control.value){
      return {userinfo : 'User with this name is currently avaible'};
    }
  }
  return null;
}

}

interface ValidatorFn{ //null when validation is valid
  (control:AbstractControl): ValidationErrors | null
}

