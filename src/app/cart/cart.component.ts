import { Component, Input } from '@angular/core';
import { menuItems } from '../menu-database';
import { MenuItem } from 'src/model.ts/menu-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  @Input() cartItems : MenuItem[] = [];

  increment(id : number) : void{
    this.cartItems[id].quantity++;
  }

  decrement(id : number) : void{
    this.cartItems[id].quantity--;
  }
}
