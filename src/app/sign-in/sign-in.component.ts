import { Component } from '@angular/core';
import { SignInService } from '../sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  constructor(public signInService : SignInService) {}

  login(){
    this.signInService.login();
  }
  
}
