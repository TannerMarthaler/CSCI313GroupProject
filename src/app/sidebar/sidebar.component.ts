import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() sidebarToggle : boolean = false;

  constructor( private route : Router ){}

  ngOnInit(){
    this.sidebarToggle = false;
  }

  closeSidebar() : void{
    this.sidebarToggle = !this.sidebarToggle;
  }
}
