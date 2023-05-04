import { Component, Input } from '@angular/core';
import { menuItems } from '../menu-database';
import { MenuItem } from 'src/model.ts/menu-item';
import { Router } from '@angular/router';

import { MenuCartService } from '../menu-cart.service';
import { SignInService } from '../sign-in.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems : MenuItem[] = [];
  @Input() cartToggle : boolean = true;
  loggedIn : boolean = false;
  successText : string = "";
  totalItems : number = 0;
  totalPrice : number = 0;

  constructor( private mcService : MenuCartService, public signInService : SignInService, private router : Router ) {}

  ngOnInit() : void{
    this.cartItems = this.mcService.getSelectedItems();
    this.totalItems = this.mcService.getTotalItems();
    this.totalPrice = this.mcService.getTotalPrice();
    this.signInService.updateEvent.subscribe((value: any) => {
      this.loggedIn = value;
    });
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
  
  calculateTotalPrice(item: any) {
    var subTotal = item.price * item.quantity;
    return subTotal;
  }
  
  handleCheckOut() {
    console.log("Service log in variable: " + this.signInService.isLoggedIn);
    console.log("Current log in status: " + this.loggedIn);
    if(this.signInService.isLoggedIn){
      this.successText = "Items successfully credited into your account!";
      this.cartItems = this.mcService.clearCart();
      // Fix (to remove all items in cart after clicking 'check out')
    }
    else{
      this.router.navigate(['/sign-in']);
    }
  }



}
