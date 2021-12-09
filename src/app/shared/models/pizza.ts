import {Crust} from "./crust";
import {Sauce} from "./sauce";
import {Topping} from "./topping";

export class Pizza {
  public id: number;
  public name: string = "";
  public toppingArray: Topping[];
  public crust: Crust;
  public sauce: Sauce;

  constructor(id: number, name: string, toppingArray: Topping[], crust: Crust, sauce: Sauce) {
    this.id = id;
    this.name = name;
    this.toppingArray = toppingArray;
    this.crust = crust;
    this.sauce = sauce;
  }
}
