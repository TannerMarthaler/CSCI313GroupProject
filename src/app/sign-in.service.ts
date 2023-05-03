import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  public updateEvent: EventEmitter<any> = new EventEmitter();

  isLoggedIn = false;

  updateLoginStatus() {
    this.updateEvent.emit(this.isLoggedIn);
  }

  login() {
    this.isLoggedIn = true;
    this.updateLoginStatus();
    console.log("Service received log in request");
  }

  logout() {
    this.isLoggedIn = false;
    this.updateLoginStatus();
  }

  constructor() { }
}
