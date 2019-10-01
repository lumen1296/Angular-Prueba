import { Component, OnInit } from '@angular/core';
import { userService } from '../services/user.service'
import User from '../models/user';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users: User[];
  constructor(private userService: userService) {
  }

  ngOnInit() {
    this.userService
      .listUsers()
      .subscribe((data: User[]) => {
        this.users = data;
      });
  }

}
