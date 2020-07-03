import { Component, OnInit } from '@angular/core';
import { Loan } from '../listloans/listloans.component';
import { Router, ActivatedRoute } from '@angular/router';
import { LoansService } from '../data/loans.service';

@Component({
  selector: 'app-loan-summary',
  templateUrl: './loan-summary.component.html',
  styleUrls: ['./loan-summary.component.css']
})
export class LoanSummaryComponent implements OnInit {

  UserLoans: Loan[]
  username:string

  constructor(
    public loanService:LoansService,
    private router:ActivatedRoute,
    private route:Router
  ) { }

  ngOnInit() {
    this.username=this.router.snapshot.params['username']
    this.refreshLoans(this.username);
  }

  refreshLoans(username){
  
      this.loanService.retriveFriends(username).subscribe(
        data => {
          this.UserLoans = data;
          console.log(data);
        })
    }

}
