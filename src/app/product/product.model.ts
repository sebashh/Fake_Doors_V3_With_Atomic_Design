export class Product {
  id: string;
  name: string;
  description: string;
  imagePath: any;
  price?: number;

  constructor(id, name, description, imagePath, price) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.price = price;
  }
}
