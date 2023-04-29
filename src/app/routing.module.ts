import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './sign-in/sign-in.component';


const ROUTES : Routes = [
  { path : '', component : HomeComponent },
  // { path : 'menu', component : MenuComponent },
  // { path : 'locations', component : LocationComponent },
  // { path : 'calendar', component : CalendarComponent },
  { path : 'about', component : AboutComponent },
  // { path : 'contact-us', component : ContactUsComponent },
  { path : 'sign-in', component : SignInComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class RoutingModule { }
