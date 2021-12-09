import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormPizzaComponent} from "./form-pizza/form-pizza.component";
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";
import {RestaurantComponent} from "./restaurant/restaurant.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'form-pizza', component: FormPizzaComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'restaurant', component: RestaurantComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
