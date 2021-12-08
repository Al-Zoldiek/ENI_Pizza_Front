export class Topping {
  public id: number;
  public name: string = "";
  public category: string = "";

  constructor(id: number, name: string, category: string) {
    this.id = id;
    this.name = name;
    this.category = category;
  }
}
