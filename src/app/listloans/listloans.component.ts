import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { LoansService } from '../data/loans.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoggingService } from '../data/login.service';


export class Loan{
  constructor(
    public id:number,
    public fromwho:string,
    public forwho:string,
    public amount:number,
    public targetDate:Date,
    public description:string

  ){}
}

export class User{
  constructor(
    public id:number,
    public name:string,
    public surname:string,
    public email:string,
    public telnumber:string

  ){}
}

@Component({
  selector: 'app-listloans',
  templateUrl: './listloans.component.html',
  styleUrls: ['./listloans.component.css'],
  styles: [`
      .older{
        color:red
      }`]
})
export class ListloansComponent implements OnInit {

  selectedLoan:Loan;
  loans: Loan[]
  friends: Loan[]
  descriptionInfo:boolean = false;
  LoanToDescription:Loan;
  username="costam"
 

  constructor(
    public loanService:LoansService,
    private router:ActivatedRoute,
    private route:Router,
    private loggingservice: LoggingService
  ) { }

  ngOnInit() {
    
    this.username=this.router.snapshot.params['username']
    sessionStorage.setItem('setname',this.username) 
    this.refreshLoans(this.username);
    
  }

  refreshLoans(username){
    this.loanService.retrieveAllLoans(username).subscribe(
      data => {
        this.loans = data;
        console.log(data);

      })
      this.loanService.retriveFriends(username).subscribe(
        data => {
          this.friends = data;
          console.log(data);
        })
    }

    updateLoan(id){
      //console.log(`update  ${id}`);
      this.loggingservice.logUpdateLoan(id);
      
      this.route.navigate(['loan',id]);
    }

    deleteLoan(id){
      
    }

    amountValidation(amount:number) :boolean {
      
      if (150<amount){
        return true; //data jest starsza niż miesiąc
      }else{
        return false;
      }

    }

    getRow(loan:Loan){
      console.log(loan.id);
      this.LoanToDescription=loan;
      this.descriptionInfo = true;
      
    }

    deleteDescription(){
      this.descriptionInfo=false;
    }

  }

  
