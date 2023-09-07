import { Injectable } from '@angular/core';
import { user } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userList: user[] = [];

  addUser(user: user) {
    this.userList.push(user);
  }

  getUsers(): user[] {
    return this.userList;
  }

  constructor() { 
  }
}
