import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
// Need to run the command npm install --save @angular/material in the command terminal 

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';

import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { RoutingModule } from './routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import { LocationDetailComponent } from './location-detail/location-detail.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    EventDetailsComponent,
    MenuComponent,
    CartComponent,
    SignInComponent,
    RegisterComponent,
    AboutComponent,
    SidebarComponent,
    HomeComponent,
    LocationComponent,
    LocationDetailComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    FormsModule,

    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    })   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
