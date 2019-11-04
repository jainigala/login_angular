import { Component, OnInit } from '@angular/core';
import {user} from '../user';
import { AppComponent } from "../app.component"
import {  Router, Routes } from "@angular/router";
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router ) { }
  // Users = this.appc.getUsers();

  ngOnInit() {
  }

  signup(event){
    event.preventDefault();
    const target =event.target;
    var flag=0;
    const username=event.target.querySelector('#uname').value;
    const pass=event.target.querySelector('#psw').value;
    console.log("Username: "+username+" pass: "+pass);
    AppComponent.Users.forEach(user => {
      if(user.username==username){
        flag=1;
      }
    });
    if(flag==1){
      alert("Username already taken.");
    }else{
      var u= {username: username, password: pass};
      AppComponent.Users.push(u);
      // this.appc.setUsers(this.Users);
      this.router.navigate(['/login']);
    }
  }

  login(){
    this.router.navigate(['/login']);
  }

}
