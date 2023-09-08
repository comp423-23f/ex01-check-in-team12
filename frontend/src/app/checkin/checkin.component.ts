import { Component } from '@angular/core';
import { FormBuilder, Validator, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
import { CheckinService } from '../checkin.service';
import { checkin } from '../checkin';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent {
  users = this.userService.getUsers()

  checkPID = this.formBuilder.group({
    PID: ''
  })

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private checkedinService: CheckinService,
  ) {}

  onSubmit(): void {
    let PIDlength = this.checkPID.value.PID as string
    if (PIDlength.length === 9){
      let userFound: boolean = false;
      for (const user of this.users){
        if (this.checkPID.value.PID === user.pid) {
          window.alert("User found: " + user.first + " " + user.last);
          userFound = true;

          const currentDate = new Date();

          let CheckedIn = new checkin(user.first as string, user.last as string, user.pid as string, currentDate); 
          this.checkedinService.addChecked(CheckedIn);

          this.checkPID.reset();
        }
      } 
      if (!userFound) {
        window.alert("User not found")
      }
    } else {
      window.alert("PID is not of length 9")
      this.checkPID.reset();
    }
  }
}
