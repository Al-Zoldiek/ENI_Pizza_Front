import {Pizza} from "./pizza";

export class Order {
  public id: number;
  public date: Date = new Date();
  public status: string;
  public pizzasList: Pizza[]=[];

  controller(id?: number, date?: Date, status?: string, pizzasList?: Pizza[]){
    this.id = id;
    this.date = date;
    this.status = status;
    this.pizzasList = pizzasList;
  }
}
