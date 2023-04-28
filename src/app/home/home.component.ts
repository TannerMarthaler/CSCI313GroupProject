import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isSidebarOpen = false;

  toggleSidebar() : void{
    this.isSidebarOpen = !this.isSidebarOpen
  }
}
