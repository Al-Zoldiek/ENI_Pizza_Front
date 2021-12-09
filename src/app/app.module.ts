import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './header/header.component';
import { FormPizzaComponent } from './form-pizza/form-pizza.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ContactComponent } from './contact/contact.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { OrdersComponent } from './orders/orders.component';
import { MonCompteComponent } from './mon-compte/mon-compte.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormPizzaComponent,
    HomeComponent,
    ContactComponent,
    RestaurantComponent,
    OrdersComponent,
    MonCompteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
