import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Loan, NewLoanInfo } from '../listloans/listloans.component';
import { User } from '../listloans/listloans.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
  export class LoansService {

  constructor(
    private http: HttpClient
  ) { }

  public retrieveAllLoans(username){
    return this.http.get<Loan[]>(`http://localhost:8088/${username}/loans`);
  }

  public retriveFriends(username){
    return this.http.get<Loan[]>(`http://localhost:8088/${username}/friends`);

  }

  public updateLoan(id,loan){
    return this.http.put(
                `http://localhost:8088/loans/${id}`
                ,loan);
  }

  public retrieveLoan(id){
    return this.http.get<Loan>(`http://localhost:8088/loans/${id}`)
  }

  public retrieveUsers(){
    return this.http.get<User[]>(`http://localhost:8088/users`)
  }


  public addLoan(newLoan){
    
    return this.http.post(`http://localhost:8088/addloan`,
                newLoan)
  };


}
