import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { userService} from '../services/user.service';


@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
})
export class CreateUsersComponent implements OnInit {

  angularForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private userService: userService) {
    this.createForm();
  }

  createForm() {
    this.angularForm = this.formBuilder.group({
      firstName: ['', Validators.required ],
      lastName: ['', Validators.required ],
      dni: ['',[Validators.required, Validators.pattern(/^\d+$/)]],
      email: ['',[Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
    });
  }

  createUser(firstName, lastName, dni, email, phone) {
    this.userService.createUser(firstName, lastName, dni, email, phone);
  }



  ngOnInit() {

  }

}
