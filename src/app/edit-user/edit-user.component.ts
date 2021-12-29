import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../user-data';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userFormGroup: FormGroup;
  users: User[];
  user: User;

  userId: number;
  status: string;
  constructor(private dataservice: DataService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.userId = +params.get('id');
      this.getUser();
    });

    this.userFormGroup = new FormGroup(
      {
        fname: new FormControl(''),
        lname: new FormControl(''),
        email: new FormControl(''),
        mobile: new FormControl(''),
        status: new FormControl('')
      },
    );
  }

  async getUser() {
    this.user = await this.dataservice.getUser(this.userId).toPromise();
  }

  editUser() {
    this.userFormGroup.value.id = this.userId;
    if (this.status) {
      this.userFormGroup.value.status = this.status;
    } else {
      this.userFormGroup.value.status = this.user.status;
    }

    if (!this.userFormGroup.value.fname) {
      this.userFormGroup.value.fname = this.user.fname;
    }

    if (!this.userFormGroup.value.lname) {
      this.userFormGroup.value.lname = this.user.lname;
    }

    if (!this.userFormGroup.value.email) {
      this.userFormGroup.value.email = this.user.email;
    }

    if (!this.userFormGroup.value.mobile) {
      this.userFormGroup.value.mobile = this.user.mobile;
    }
    this.dataservice.updateUser(this.userFormGroup.value).subscribe(data => {
      this.user = data;
    });
    // this.userFormGroup.reset();
  }

  onChangeStatus(status) {
    this.status = status;
  }

}
