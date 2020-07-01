import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }


  public addUser(user){
    return this.http.put(
                `http://localhost:8088/users/add`
                ,user);
  }
}
