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
export class ValidationDirective implements Validator {
  
  activeUser2: User[];
  static activeUser: User[];
  validator: ValidatorFn

  constructor(private loanService:LoansService){
    this.validator= validateUser(loanService);
  }

  validate(control:FormControl){
    return this.validator(control);
  }
}

  function validateUser(loanService:LoansService) : ValidatorFn{
  
  let activeUser: User[];

  loanService.retrieveUsers().subscribe(data => {
    activeUser = data;
    console.log(data);
  });

  return (control:AbstractControl) => {
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

