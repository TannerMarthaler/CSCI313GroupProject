import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() sidebarToggle : boolean = false;

  closeSidebar() : void{
    this.sidebarToggle = !this.sidebarToggle;
  }
}
