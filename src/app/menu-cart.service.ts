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

  totalItems : number = 0;
  totalPrice : number = 0;

  getMenuItems() : MenuItem[]{
    return menuItems;
  }

  incrementMenuItem(id : number) : void{
    this.selectedItems[id].quantity++;
    this.totalItems++;
  }

  decrementMenuItem(id : number) : void{
    this.selectedItems[id].quantity--;
    this.totalItems--;
  }

  getSelectedItems() : MenuItem[]{
    return this.selectedItems;
  }

  getTotalItems() : number{
    return this.totalItems;
  }

  getTotalPrice(): number{
    this.totalPrice = 0;
    for( let item of this.selectedItems ){
      if( item.quantity > 0 ){
        this.totalPrice += (item.quantity * item.price);
      }
    }

    return this.totalPrice;
  }

  // Fix
  clearCart() : MenuItem[]{
    this.selectedItems = menuItems;
    return menuItems;
  }
}
