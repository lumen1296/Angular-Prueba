import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { userService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import User from '../models/user';

@Component({
  selector: 'app-modify-users',
  templateUrl: './modify-users.component.html',
  styleUrls: ['./modify-users.component.css']
})
export class ModifyUsersComponent implements OnInit {

  angularForm: FormGroup;
  user: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, private userService: userService) {
    this.createForm();
  }

  createForm() {
    this.angularForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dni: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
    });
  }

  modifyUser(firstName, lastName, dni, email, phone) {
    this.route.params.subscribe(params => {
      this.userService.modifyUser(firstName, lastName, dni, email, phone, params.id);

    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userService.getUSer(params['id']).subscribe(res => {
        this.user = res;
      });
    });
  }
}
