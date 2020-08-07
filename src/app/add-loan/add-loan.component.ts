import { Component, OnInit } from '@angular/core';
import { User } from '../listloans/listloans.component';
import { LoansService } from '../data/loans.service';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn, Validators, AsyncValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-add-loan',
  templateUrl: './add-loan.component.html',
  styleUrls: ['./add-loan.component.css']
})
export class AddLoanComponent implements OnInit {

  users : User[]
  form:FormGroup


  get usersArray() {
    return this.form.controls.listUsers as FormArray;
  };


  constructor(private loanService: LoansService, private fB: FormBuilder) {
    this.form = this.fB.group({
      listUsers:new FormArray([]),
      amount:['',[
        Validators.required,
        Validators.pattern("^[0-9]*$"),
      ] 
      ]
    });

    this.users.forEach(() => this.usersArray.push(new FormControl(false)));
   
  }

 

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){

    this.loanService.retrieveUsers().subscribe(
      data => {
        this.users = data;
        console.log(data);

      })
  }

  submit(){

    const selectedUser = this.form.value.listUsers
      .map((checked, i) => checked? this.users[i] : null)
      .filter(temp => temp !== null);
    console.log(selectedUser);

    const amountMoney = this.form.value.amount;

    this.loanService.addLoan(selectedUser,amountMoney);

  }


 



}
