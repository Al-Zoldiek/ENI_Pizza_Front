import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Order} from "../models/order";

@Injectable({
  providedIn: 'root'
})

export class OrderService {

  constructor(private http: HttpClient) {
  }

  getOrders(){
    console.log('passage dans orderService getOrders');
    return this.http.get('http://localhost:8080/orders');
  }

}
