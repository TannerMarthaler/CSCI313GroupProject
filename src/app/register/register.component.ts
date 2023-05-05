import { Component,  } from '@angular/core';
import { Router } from '@angular/router';

import { SignInService } from '../sign-in.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  redirectText : string = "";
  email! : string;
  phoneNumber! : number;
  dateOfBirth! : Date;
  address! : string;
  password! : string;
  confirmPassword! : string;
  fName! : string;
  lName! : string;

  isFormValid(): boolean {
    // Check if all required fields are not empty
    if (!this.email) {
      return false;
    }
    else
      return true;
  }

  handleClick() {
    this.login();
    this.signInService.newName(this.fName);
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
