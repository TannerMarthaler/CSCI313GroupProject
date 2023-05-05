import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'src/model.ts/menu-item';
import { menuItems } from '../menu-database';

import { MenuCartService } from '../menu-cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menu : MenuItem[] = [];
  @Input() cartItems : number[] = [];
  @Input() cartToggle : boolean = false;
  numberOfItems : number = 0;

  constructor( private mcService : MenuCartService ) {}


  ngOnInit() {
    this.menu = this.mcService.getMenuItems();
    this.numberOfItems = this.menu.length;
  }

  addToCart(id : number) : void{
    this.mcService.incrementMenuItem(id);
  }

  removeItem( id : number ) : void{
    this.mcService.decrementMenuItem(id);
  }
}
