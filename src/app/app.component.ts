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

  logout(){
    this.signInService.logout();
  }
}
