import { Component, OnInit } from '@angular/core';
import {Order} from "../shared/models/order";
import {OrderService} from "../shared/services/order.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  public orders: Order[] = [];

  constructor(private orderServ: OrderService) {
  }

  ngOnInit(): void {
    this.getAllOrders()
  }

  //recupère la liste des commandes
  getAllOrders(){
    console.log('passage dans orders.component getAllOrders');
    this.orderServ.getOrders().subscribe(
      (data: any) => {
        // Lorsque l'API a répondu correctement.
        this.orders = data;
        console.log(this.orders);
      }, (error: any) => {
        // Lorsque l'API renvoie une erreur.
        console.error(error);
      }
    );
  }


}
