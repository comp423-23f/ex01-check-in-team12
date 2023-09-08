import { Injectable } from '@angular/core';
import { checkin } from './checkin';


@Injectable({
  providedIn: 'root'
})
export class CheckinService {
  checkedList: checkin[] = [];

  addChecked(checkin: checkin) {
    this.checkedList.push(checkin);
  }

  getChecked(): checkin[] {
    return this.checkedList;
  }

  constructor() { 
  }
}
