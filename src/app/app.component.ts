import { Component } from '@angular/core';
import {user} from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Login';
  public static Users : user[] = [
    {username: 'Fenil', password:'123'},
    {username: 'Messi', password:'123'},
    {username: 'Ronaldo', password:'123'},
    {username: 'User', password:'user123'},

    ];

    // public getUsers() {
    //   return this.Users;
    // }

    // public setUsers(users: any): void {
    //   this.Users = users;
    // }
}
