import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../listloans/listloans.component';
import { Router } from '@angular/router';
import { LoansService } from '../data/loans.service';

@Component({
  selector: 'app-new-header',
  templateUrl: './new-header.component.html',
  styleUrls: ['./new-header.component.css']
})
export class NewHeaderComponent implements OnInit {
  @Output() OnSelected = new EventEmitter<string>();

  validSuccess: boolean = false;
  setname: boolean;
  localStorage: any;
  username:string
  users: User [];
  addNewUser: boolean;
  tmp : boolean;

  constructor(
    private router: Router,
    private loanService :LoansService
  ) { }
  

  ngOnInit() {
    this.getUsers();
    this.tmp = false;
   
  }

  executeList(){
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
    sessionStorage.setItem('addNewUser','0');
    this.tmp=true
    
  }

  onSelect(onSelected:string){
    this.OnSelected.emit('events');
  }


}
