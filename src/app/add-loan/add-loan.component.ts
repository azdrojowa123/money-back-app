import { Component, OnInit } from '@angular/core';
import { User, NewLoanInfo } from '../listloans/listloans.component';
import { LoansService } from '../data/loans.service';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn, Validators, AsyncValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-add-loan',
  templateUrl: './add-loan.component.html',
  styleUrls: ['./add-loan.component.css']
})
export class AddLoanComponent implements OnInit {

  public users : User[] = [];
  form: FormGroup
  username: string
  success: boolean

  constructor(public loanService: LoansService, private fB: FormBuilder) {}

  get usersArrayNew() {
    return this.form.controls.listUsers as FormArray;
  };

  public addBoxes(){

    this.users.forEach(() => this.usersArrayNew.push(new FormControl(false)));
  }

  ngOnInit() {
    this.success = false;
    this.loanService.retrieveUsers().subscribe(
      (data: User[]) => {
        for(const i of data){
          this.users.push(i);
        }
        this.form = this.fB.group({
          listUsers:new FormArray([]),
          amount:['',[
            Validators.required,
            Validators.pattern("^[0-9]*$"),
          ]],
          description:['',[
            Validators.required
          ]]
       


      });
    this.addBoxes();

      });
    this.username=sessionStorage.getItem('setname')
  }

  public submit(){

    const selectedUser = this.form.value.listUsers
      .map((checked, i) => checked? this.users[i] : null)
      .filter(temp => temp !== null);
    console.log(selectedUser);

    const amountMoney = this.form.value.amount;
    const description = this.form.value.description;

    const newLoan = new NewLoanInfo(selectedUser,amountMoney,this.username,description);

    this.success=true;

    this.loanService.addLoan(newLoan).subscribe();
  
  }
}
