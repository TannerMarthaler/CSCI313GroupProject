import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MenuComponent } from './menu/menu.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CartComponent } from './cart/cart.component';

import { LocationComponent } from './location/location.component';
import { LocationDetailComponent } from './location-detail/location-detail.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


const ROUTES : Routes = [
  { path : '', component : HomeComponent },
  { path : 'menu', component : MenuComponent },
  { path : 'locations', component : LocationComponent },
  { path : 'location-detail', component : LocationDetailComponent},
  { path : 'calendar', component : CalendarComponent },
  { path : 'about', component : AboutComponent },
  { path : 'contact-us', component : ContactUsComponent },
  { path : 'sign-in', component : SignInComponent },
  { path : 'cart', component : CartComponent },
  { path : 'register', component : RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class RoutingModule { }
