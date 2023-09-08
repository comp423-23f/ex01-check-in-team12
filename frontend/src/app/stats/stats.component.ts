import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { CheckinService } from '../checkin.service';
import { user } from '../user';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {

  users = this.userService.getUsers().sort((a, b) => {
    return a.first.localeCompare(b.first);
  });


  checkedUsers = this.checkinService.getChecked().sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  constructor(
    private userService: UserService,
    private checkinService: CheckinService,
  ) {}

}
