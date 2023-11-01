import { Product } from "../mock/interfaces/Product.interface";


export interface CartProduct {
  product: Product;
  quantity: number;
  price: number;
}
