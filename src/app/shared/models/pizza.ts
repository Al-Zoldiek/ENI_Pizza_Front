import {Crust} from "./crust";
import {Sauce} from "./sauce";
import {Topping} from "./topping";

export class Pizza {
  public id!: number;
  public name: string = "";
  public toppingsList: Topping[];
  public crust: Crust;
  public sauce: Sauce;

  constructor(name: string, toppingsList: Topping[], crust: Crust, sauce: Sauce) {
    this.name = name;
    this.toppingsList = toppingsList;
    this.crust = crust;
    this.sauce = sauce;
  }
}
