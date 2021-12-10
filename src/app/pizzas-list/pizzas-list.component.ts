import { Component, OnInit } from '@angular/core';
import {Pizza} from "../shared/models/pizza";
import {Topping} from "../shared/models/topping"
import {PizzaService} from "../shared/services/pizza.service";
import {BigInteger} from "@angular/compiler/src/i18n/big_integer";

@Component({
  selector: 'app-pizzas-list',
  templateUrl: './pizzas-list.component.html',
  styleUrls: ['./pizzas-list.component.scss']
})
export class PizzasListComponent implements OnInit {

  public pizzaList: Pizza[]=[];
  public pizzasSorted: Pizza[]=[];

  constructor(
    private pizzaService: PizzaService
  ) { }

  ngOnInit(): void {
    this.getAllPizzas();
  }
  // Retrieves all pizzas from the database
  getAllPizzas(){
    console.log(' > Pizzas List Component : getAllPizzas()');
    this.pizzaService.getPizzas().subscribe(
      (data:any) => {
        this.pizzaList = data;
        this.pizzasSorted = data;
      }, (error : any) => {
        console.error(error);
      }
    );
  }

  getPizzaById(pizzaId: number){
    console.log(' > Pizzas List Component : getPizzaById('+ pizzaId +')');
    let pizzaBigId = BigInt(pizzaId);
    this.pizzaService.getPizzaById(pizzaBigId).subscribe(
      (data:any) => {
        this.pizzaList = data;
        this.pizzasSorted = data;
        console.log(this.pizzaList);
      }, (error : any) => {
        console.error(error);
      }
    );
  }

  sortPizzas(param : string){
    console.log(' > pizzas-list component : sortPizzas()');
    console.log('Paramètre de tri : ' + param);

    // Spread operator : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    this.pizzasSorted = [];

    //console.log('this.pizzasSorted :' + this.pizzasSorted);
    if(param === 'Végétariennes'){
      for (let pizza of this.pizzaList) {
        let isMeat : boolean = false;
        // Sorted by toppings
        for (let topping of pizza.toppingsList) {
          //console.log(topping);
          if(topping.category === 'Viande' || topping.category === 'Poisson'){
            isMeat = true;
          }
        }
        if(!isMeat){
          this.pizzasSorted.push(pizza);
        }
      }
    }
    if(param === 'Vegan'){
      for (let pizza of this.pizzaList) {
        let isMeat : boolean = false;
        // Sorted by crust
        if(pizza.crust.name === 'Mozza-crust'){
          isMeat = true;
        }
        // Sorted by sauce
        if(pizza.sauce.name === 'Crème'){
          isMeat = true;
        }
        // Sorted by toppings
        for (let topping of pizza.toppingsList) {
          //console.log(topping);
          if(topping.category === 'Viande' || topping.category === 'Poisson'){
            console.log('toppingCategory isMeat :');
            isMeat = true;
          }
        }
        if(!isMeat){this.pizzasSorted.push(pizza)};
      }
    }
    if(param === 'Toutes'){
      this.pizzasSorted = [...this.pizzaList];
    }
  }
}

