import { Component, OnInit } from '@angular/core';
import {user} from '../user';
import { AppComponent } from "../app.component"
import {  Router, Routes } from "@angular/router";
import { HomeComponent } from '../home/home.component';
import { from } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(private router: Router ) { }
    
  ngOnInit() {

  }

  login(event){
    event.preventDefault();
    const target =event.target;
    var flag=0;
    const username=event.target.querySelector('#uname').value;
    const pass=event.target.querySelector('#psw').value;
    console.log("Username: "+username+" pass: "+pass);
    AppComponent.Users.forEach(user => {
      if(user.username==username&&user.password==pass){
        this.router.navigate(['/home']);
        flag=1;
      }
    });
    if(flag!=1){
      alert("Invalid username or password.");
    }

  }

  signup(){
    this.router.navigate(['/signup']);
  }

}
