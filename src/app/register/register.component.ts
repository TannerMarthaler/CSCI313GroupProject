import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SignInService } from '../sign-in.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  redirectText : string = "";

  handleClick() {
    this.login();
    this.redirectText = "Account successfully created. Logging you in..."
    setTimeout(() => {
      this.router.navigate(['']);
  }, 3500);
  }

  login(){
    this.signInService.login();
  }

  constructor(private router: Router, public signInService : SignInService) {}
}
