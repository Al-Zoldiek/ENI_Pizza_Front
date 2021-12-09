import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(private http: HttpClient) { }

  getPizzaById(pizzaId: bigint){
    console.log(' > PizzaService : getPizzaById(' + pizzaId + ')');
    return this.http.get('http://localhost:8080/pizza/' + pizzaId);
  }

  getPizzas(){
    console.log(' > PizzaService : getPizzas()');
    return this.http.get('http://localhost:8080/pizzas');

  }
}
