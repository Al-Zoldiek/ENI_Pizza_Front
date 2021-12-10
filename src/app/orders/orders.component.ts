import { Component, OnInit } from '@angular/core';
import {Order} from "../shared/models/order";
import {OrderService} from "../shared/services/order.service";
import {PizzaService} from "../shared/services/pizza.service";
import {Pizza} from "../shared/models/pizza";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  public orders: Order[] = [];
  public pizzas: Pizza[] = [];

  constructor(private orderServ: OrderService, private pizzaServ: PizzaService) {
  }

  ngOnInit(): void {
    this.getAllOrders()
  }

  //recupère la liste des commandes
  getAllOrders(){
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
