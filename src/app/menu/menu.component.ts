import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'src/model.ts/menu-item';
import { menuItems } from '../menu-database';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menuTest : MenuItem[] = [];
  @Input() cartItems : number[] = [];

  ngOnInit() {
    this.menuTest = menuItems;
  }

  addToCart(id : number) : void{
    this.menuTest[id].quantity++;
  }
}
