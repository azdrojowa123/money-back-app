import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoansService } from '../data/loans.service';
import { User } from '../listloans/listloans.component';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  setname: boolean;
  localStorage: any;
  username:string
  users: User []

  constructor(
    private router: Router,
    private loanService :LoansService
  ) { }

  public sessionStorageItem(): boolean {
    if (sessionStorage.getItem('setname') == null) {
      return this.setname= false;
    } else {
      return this.setname = true;
    };
  }

  ngOnInit() {
    this.sessionStorageItem();
    this.getUsers();
  }

  executeList(){
    this.router.navigate(['loans',this.username])
     
  }

  executeListwithoutusername(){

    this.username=sessionStorage.getItem('setname')
    this.router.navigate(['loans',this.username])
     
  }

  getUsers(){

      this.loanService.retrieveUsers().subscribe(
        data => {
          this.users = data;
          console.log(data);
  
        })
    
  }

  addUser(){
    
    this.router.navigate(['user']);
  }


  }

