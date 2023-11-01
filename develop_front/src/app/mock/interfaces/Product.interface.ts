export class Product {
    idProduct!:number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;

    constructor(name: string, description: string, stock: number, price: number, image: string) {
        this.name = name;
        this.description = description;
        this.stock = stock;
        this.price = price;
        this.image = image;
    }
}