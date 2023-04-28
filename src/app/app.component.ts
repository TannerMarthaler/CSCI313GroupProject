import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isSidebarOpen = false;

  constructor(private rout : Router){}

  toggleSidebar() : void{
    this.isSidebarOpen = !this.isSidebarOpen
  }

  currentRoute() : boolean{
    return this.rout.url == '/';
  }
}
