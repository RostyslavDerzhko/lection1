
import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../../../models/UserModel';
import {UserService} from '../services/user.service';


@Component({
  selector: 'app-root',
  template: `<h1>hello {{msg}}!</h1>
  <app-user *ngFor="let u of users" [user]="u"></app-user>
  `,
  styles: [`h1 {
    background: silver
  }`]
})
export class AppComponent {
  msg = 'users'; // те, що знаходиться тут, буде відправлене у {{msg}}
  users: UserModel[];

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe(value=>this.users=value)
  }

}
