import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Loan } from '../listloans/listloans.component';

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


}
