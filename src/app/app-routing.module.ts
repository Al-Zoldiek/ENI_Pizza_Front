import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormPizzaComponent} from "./form-pizza/form-pizza.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'form-pizza', component: FormPizzaComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
