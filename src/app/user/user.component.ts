import { Component, OnInit } from '@angular/core';
import { LoansService } from '../data/loans.service';
import { UserService } from '../data/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../listloans/listloans.component';
import { flatten } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  validSuccess:boolean = false;
  user : User

  constructor(
    private userService:UserService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    this.user = new User(-1,'','','','');
    if(sessionStorage.getItem('addNewUser') == 'true'){
      this.validSuccess=true;
    }else{
      this.validSuccess=false;
    }
  }

  saveUser(){

    this.userService.addUser(this.user)
    .subscribe(
      data => {
        console.log(data)
        sessionStorage.setItem('addNewUser','true');
        this.validSuccess=true;
        window.location.reload();
      }
    )

  }
}
