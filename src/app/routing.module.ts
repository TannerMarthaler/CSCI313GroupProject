import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';


const ROUTES : Routes = [
  { path : '', component : AppComponent },
  // { path : '/menu', component : MenuComponent },
  // { path : '/locations', component : LocationComponent },
  // { path : '/calendar', component : CalendarComponent },
  // { path : '/about-us', component : AboutUsComponent },
  // { path : '/contact-us', component : ContactUsComponent },
  // { path : '/sign-in', component : SignInComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class RoutingModule { }
