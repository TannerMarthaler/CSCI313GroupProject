import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() sidebarToggle : boolean = false;
  test : string = '';

  constructor( private route : Router ){}

  closeSidebar() : void{
    this.sidebarToggle = !this.sidebarToggle;
  }
}
