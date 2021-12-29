import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../user-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html'
})
export class GetUserComponent implements OnInit {
  users: User[] = [];
  constructor(private dataservice: DataService,
    private route: Router) { }

  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.dataservice.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  deleteUser(userId) {
    this.dataservice.deleteUser(userId).subscribe(data => {
      this.getUsers();
    });
  }

  editUser(userId) {
    this.route.navigate(['/edit-user', userId])
  }

}
