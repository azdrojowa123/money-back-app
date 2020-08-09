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

  users : User[] =[]
  form: FormGroup
  username: string


  get usersArray() {
    return this.form.controls.listUsers as FormArray;
  };


  constructor(private loanService: LoansService, private fB: FormBuilder) {

    this.form = this.fB.group({
      listUsers:this.builCheckBoxes(),
      amount:['',[
        Validators.required,
        Validators.pattern("^[0-9]*$"),
      ]],
      description:['',[
        Validators.required
      ]]
    });

    this.addBoxes();
  }

  public addBoxes(){
    this.users.forEach((s) => this.usersArray.push(new FormControl(false)));
  }

  public builCheckBoxes(){

    this.loanService.retrieveUsers().subscribe(
      data => {
        this.users = data;
        console.log(data);

      })

    const temp = this.users.forEach( u => {
      return this.fB.control(new FormControl(false));
    })
    return temp;
  }

 

  ngOnInit() {
    this.getUsers();
    this.username=sessionStorage.getItem('setname')
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
    const description = this.form.value.description;

    this.loanService.addLoan(selectedUser,amountMoney,this.username,description);
  

  }


 



}
