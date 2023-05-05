import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Router } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignInService } from './sign-in.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'the-spot';
  isSidebarOpen = false;
  loggedIn! : boolean;

  constructor(private rout : Router, public signInService : SignInService){}

  ngOnInit() {
    this.signInService.updateEvent.subscribe((value: any) => {
      this.loggedIn = value;
    });
  }

  toggleSidebar() : void{
    this.isSidebarOpen = !this.isSidebarOpen
  }

  currentRoute() : boolean{
    return this.rout.url == '/';
  }

  backgroundApplicableRoute() : boolean{
    var route = this.rout.url;
    if( route == '/locations' || route == '/location-detail' || route == '/sign-in' || route == '/register' || route == '/contact-us' || route == '/calendar' ){
      return true;
    }
    else{
      return false;
    }
  }

  logout(){
    this.signInService.logout();
  }
}
