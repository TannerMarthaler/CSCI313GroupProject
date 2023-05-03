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
  count : number = 0;
  totalCost : number = 0;

  getMenuItems() : MenuItem[]{
    return this.selectedItems;
  }

  addMenuItem(id : number) : void{
    this.selectedItems[id].quantity++;
    this.count++;
    this.totalCost += this.getItemPrice(id);
  }

  getItemPrice(id : number) : number{
    return this.selectedItems[id].price;
  }

  decrementMenuItem(id : number) : void{
    this.selectedItems[id].quantity--;
    this.count--;
    this.totalCost -= this.getItemPrice(id);
  }

  getQuantity() : number{
    return this.count;
  }

  getTotalCost() : number{
    return this.totalCost;
  }
}
