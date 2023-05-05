import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  public updateEvent: EventEmitter<any> = new EventEmitter();
  public updateNameEvent : EventEmitter<any> = new EventEmitter();

  isLoggedIn = false;
  name! : string;

  updateStatus() {
    this.updateEvent.emit(this.isLoggedIn);
    
  }

  updateNameStatus() {
    this.updateNameEvent.emit(this.name);
  }

  login() {
    this.isLoggedIn = true;
    this.updateStatus();
    console.log("Service received log in request");
  }

  logout() {
    this.isLoggedIn = false;
    this.updateStatus();
  }

  newName(name : string) : void {
    this.name = name;
    this.updateNameStatus();
    console.log("Service received new name: " + name);
  }

  constructor() { }
}
