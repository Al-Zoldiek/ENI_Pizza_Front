import {Order} from "./order";

export class User {
  public id: number;
  public name: string;
  public order: Order;

  constructeur(id?: number, name?: string, order?: Order){
    this.id = id;
    this.name = name;
    this.order = order;
  }
}
