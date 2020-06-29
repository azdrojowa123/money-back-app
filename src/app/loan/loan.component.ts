import { Component, OnInit } from '@angular/core';
import { Loan } from '../listloans/listloans.component';
import { LoansService } from '../data/loans.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {

  id:number
  loan:Loan
  username:String
  validSuccess:boolean=false

  constructor(
    private loanService:LoansService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.username = sessionStorage.getItem('setname');
    this.loan=new Loan(this.id,'','',23,new Date());


    this.loanService.retrieveLoan(this.id)
    .subscribe(
      data=>{
        this.loan=data
      }
        
    )

  }

  saveLoan(){

    this.loanService.updateLoan(this.id,this.loan)
        .subscribe(
          data => {
            console.log(data)
            this.validSuccess=true;
          }
        )
  
}
}
