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
  @Input() cartToggle : boolean = true;
  quantity! : number;
  totalCost! : number;

  constructor( private mcService : MenuCartService ) {}

  ngOnInit() {
    this.cartItems = this.mcService.getMenuItems();
    this.getQuantity();

  }

  increment(id : number) : void{
    this.mcService.addMenuItem(id);
    this.cartItems = this.mcService.getMenuItems();
    this.getQuantity();
  }

  decrement(id : number) : void{
    this.mcService.decrementMenuItem(id);
    this.cartItems = this.mcService.getMenuItems();
    this.getQuantity();
  }

  getQuantity() : void{
    this.quantity = this.mcService.getQuantity();
    console.log("Current quantity: " + this.quantity);
  }

  getTotalCost() : number{
    return this.mcService.getTotalCost();
  }

}
