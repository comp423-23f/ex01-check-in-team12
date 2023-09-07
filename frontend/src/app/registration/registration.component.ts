import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserService } from '../user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {


  userBuilder = this.formBuilder.group({
    first: '',
    last: '',
    PID: ''
  })

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
  ) {}

  onSubmit(): void {
    // this.userService.addUser()
    // this.userService.getUsers()
    window.alert('Thank you for registering! You can now go to the homepage ' + this.userBuilder.value.first);
    this.userBuilder.reset();
  }
}
