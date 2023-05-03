import { Injectable } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { MenuItem } from 'src/model.ts/menu-item';
import { menuItems } from './menu-database';

@Injectable({
  providedIn: 'root'
})
export class MenuCartService {

  constructor() { }

  selectedItems : MenuItem[] = menuItems;

  getMenuItems() : MenuItem[]{
    return this.selectedItems;
  }

  addMenuItem(id : number) : void{
    this.selectedItems[id].quantity++;
  }

  decrementMenuItem(id : number) : void{
    this.selectedItems[id].quantity--;
  }
}
