import {Component, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
//import { DatePipe } from '@angular/common'

@Injectable({
  providedIn: 'root'
})

export class OrderService {

  public dateOrder: Date = new Date();
  constructor(private http: HttpClient) {//, private datePipe: DatePipe) {
    //this.date = this.datePipe.transform(this.date, 'dd/MM/yyyy');
  }

  getOrders(){
    console.log('passage dans orderService getOrders');
    return this.http.get('http://localhost:8080/orders');
  }

}
