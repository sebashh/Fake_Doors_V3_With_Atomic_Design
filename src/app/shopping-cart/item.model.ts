export class Item {
    id?: string;
    name: string;
    amount: number;
    price: number;

  constructor(id, name, amount, price) {
    this.id = id;
    this.name = name;
    this.amount = amount;
    this.price = price;
  }
}
