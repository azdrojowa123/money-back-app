import { Component, OnInit } from '@angular/core';
import { LoansService } from '../data/loans.service';
import { UserService } from '../data/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../listloans/listloans.component';
import { flatten } from '@angular/core/src/render3/util';
import { LoggingService } from '../data/login.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  validSuccess:boolean = false;
  user : User
  savedUser:boolean = false;

  constructor(
    private userService:UserService,
    private route:ActivatedRoute,
    private router:Router,
    private loggingservice:LoggingService
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

    if(window.confirm('Are you sure to add this new user ? ')){
      this.userService.addUser(this.user)
    .subscribe(
      data => {
        //console.log(data)
        this.loggingservice.logUserNew(this.user.name);
        sessionStorage.setItem('addNewUser','true');
        this.validSuccess=true;
        window.location.reload();
      }
    )
    }
    

  }
}
