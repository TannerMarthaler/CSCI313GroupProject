
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { SignInService } from '../sign-in.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  @ViewChild('FName') FName!: ElementRef;
  @ViewChild('LName') LName!: ElementRef;
  @ViewChild('PhoneNumber') PhoneNumber!: ElementRef;
  @ViewChild('Email') Email!: ElementRef;
  @ViewChild('Question') Question!: ElementRef;

  successText : string = "";
  loggedIn : boolean = false;

  constructor( public signInService : SignInService, private router : Router ) {}

  handleQuestionSubmission() {
    console.log("Service log in variable: " + this.signInService.isLoggedIn);
    console.log("Current log in status: " + this.loggedIn);
    if(this.signInService.isLoggedIn){
      this.successText = "Question Successfully Submitted!";
      this.FName.nativeElement.value = '';
      this.LName.nativeElement.value = '';
      this.PhoneNumber.nativeElement.value = '';
      this.Email.nativeElement.value = '';
      this.Question.nativeElement.value = '';
    }
    else{
      this.router.navigate(['/sign-in']);
    }
  }
}


