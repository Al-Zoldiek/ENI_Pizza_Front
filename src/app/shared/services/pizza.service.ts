import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pizza} from "../models/pizza";

@Injectable({
  providedIn: 'root'
})

export class PizzaService {

  constructor(private http: HttpClient) { }

  addPizza(pizzaToAdd: Pizza){
    console.log(' > Pizza service : addPizza()');
    return this.http.post('http://localhost:8080/create-pizza', pizzaToAdd);
  }

}
