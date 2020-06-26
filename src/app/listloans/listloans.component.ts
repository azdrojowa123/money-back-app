import { Component, OnInit } from '@angular/core';
import { LoansService } from '../data/loans.service';
import { Router } from '@angular/router';


export class Loan{
  constructor(
    public id:number,
    public fromwho:string,
    public forwho:string,
    public amount:number,
    public targetDate:Date

  ){}
}

@Component({
  selector: 'app-listloans',
  templateUrl: './listloans.component.html',
  styleUrls: ['./listloans.component.css']
})
export class ListloansComponent implements OnInit {

  loans: Loan[]
  

  constructor(
    public loanService:LoansService,
    private router:Router
  ) { }

  ngOnInit() {
    this.loanService.retrieveAllLoans().subscribe(
      data => {
        this.loans = data;
        console.log(data);
      }
    )
  }


}
