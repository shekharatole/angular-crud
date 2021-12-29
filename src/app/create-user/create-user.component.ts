import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../user-data';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html'
})
export class CreateUserComponent implements OnInit {
  userFormGroup: FormGroup;
  users: User[];
  user: User;

  constructor(private dataservice: DataService, private router:Router) { }
  ngOnInit() {
    this.userFormGroup = new FormGroup(
      {
        fname: new FormControl(''),
        lname: new FormControl(''),
        email: new FormControl(''),
        mobile: new FormControl(''),
        status: new FormControl('Deactive')
      },
    );
    this.getUsers();
  }

  getUsers() {
    this.dataservice.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  addUser() {
    this.dataservice.addUser(this.userFormGroup.value).subscribe(data => {
      this.user = data;
    });
    this.getUsers();
    this.userFormGroup.reset();
    this.router.navigate(['/users-list'])
  }
}
