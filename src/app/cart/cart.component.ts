import { Component, Input } from '@angular/core';
import { menuItems } from '../menu-database';
import { MenuItem } from 'src/model.ts/menu-item';
import { MenuCartService } from '../menu-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems : MenuItem[] = [];
  totalItems : number = 0;
  totalPrice : number = 0;

  constructor( private mcService : MenuCartService ){}

  ngOnInit() : void{
    this.cartItems = this.mcService.getSelectedItems();
    this.totalItems = this.mcService.getTotalItems();
    this.totalPrice = this.mcService.getTotalPrice();
  }

  increment(id : number) : void{
    this.mcService.incrementMenuItem(id);
    this.totalItems++;
    this.totalPrice += this.cartItems[id].price;
  }

  decrement(id : number) : void{
    this.mcService.decrementMenuItem(id);
    this.totalItems--;
    this.totalPrice -= this.cartItems[id].price;
  }



}
