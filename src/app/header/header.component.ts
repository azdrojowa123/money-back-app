import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoansService } from '../data/loans.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  setname: boolean;
  localStorage: any;
  username:""

  constructor(
    private router: Router,
    private loanService :LoansService
  ) { }

  public sessionStorageItem(): boolean {
    //localStorage.clear();
    if (sessionStorage.getItem('setname') == null) {
      return this.setname= false;
    } else {
      return this.setname = true;
    };
  }

  ngOnInit() {
    this.sessionStorageItem();
  }

  executeList(){
    this.router.navigate(['loans',this.username])
     
  }

  }

