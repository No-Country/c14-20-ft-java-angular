import { Product } from './Product.interface';

export interface CartProduct {
  product: Product;
  quantity: number;
  price: number;
}
