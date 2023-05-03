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
  quantity! : number;
  totalCost! : number;
  successText : string = "";

  constructor( private mcService : MenuCartService, public signInService : SignInService, private router : Router ) {}

  ngOnInit() {
    this.cartItems = this.mcService.getMenuItems();
    this.getQuantity();
    this.signInService.updateEvent.subscribe((value: any) => {
      this.loggedIn = value;
    });
  }

  handleCheckOut() {
    console.log("Service log in variable: " + this.signInService.isLoggedIn);
    console.log("Current log in status: " + this.loggedIn);
    if(this.signInService.isLoggedIn){
      this.successText = "Items successfully credited into your account!";
    }
    else{
      this.router.navigate(['/sign-in']);
    }
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
