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

  public sessionStorageItem(): boolean {
    if (sessionStorage.getItem('setname') == null) {
      return this.setname= false;
    } else {
      return this.setname = true;
    };
  }

  
  public session2():boolean{
    if(sessionStorage.getItem('addNewUser') == null){
      return  true;
    }else{
      return  false;
    }
  }

  ngOnInit() {
    this.sessionStorageItem();
    this.getUsers();
    this.session2();
    this.tmp = false;
   
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
    sessionStorage.setItem('addNewUser','0');
    this.tmp=true
    //this.router.navigate(['user']);
  }

  executeSummary(){
    this.username=sessionStorage.getItem('setname')
    this.router.navigate(['friends',this.username])
  }

  onSelect(onSelected:string){
    this.OnSelected.emit('events');
  }


}
