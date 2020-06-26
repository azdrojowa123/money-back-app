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

  loan:Loan

  constructor(
    private loanService:LoansService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
  }

}
