import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ToppingService {

  constructor(private http: HttpClient) { }

  getTopping(toppingId : bigint){
    console.log(' > Topping service : getTopping()');
    return this.http.get('http://localhost:8080/topping/'+toppingId);
  }

  getToppings(){
    console.log(' > Topping service : getToppings()');
    return this.http.get('http://localhost:8080/toppings');
  }
}
