import { Component,OnInit } from '@angular/core';
import { UserService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements  OnInit {
  users :any;
  constructor(private userService : UserService){}

  ngOnInit(){
    this.users = this.userService.users;
  }
}
