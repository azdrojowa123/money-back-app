import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  validSuccess:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  saveUser(){
    this.validSuccess = true;

  }
}
