import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { CartProduct } from 'src/app/interfaces/CartProduct.interface';
import { Product } from 'src/app/interfaces/Product.interface';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  //aca deberia hacer un get a los pedidos del usuario que esten en el carrito y traerlos
  arrayProducts: CartProduct[] = [];
  productsObs: BehaviorSubject<CartProduct[]> = new BehaviorSubject<
    CartProduct[]
  >(this.arrayProducts);
  constructor() {}

  addToCart(product: Product) {
    let foundIndex = this.arrayProducts.findIndex(
      (e) => e.product.idProduct === product.idProduct
    );
    if (foundIndex !== -1) {
      this.arrayProducts[foundIndex]['quantity'] += 1;
    } else {
      let newProductInCart: CartProduct = { product, quantity: 1, price: 1 };
      this.arrayProducts.push(newProductInCart);
    }
    this.productsObs.next(this.arrayProducts);
    console.log(this.arrayProducts);
  }
  deleteFromCart(product: Product) {
    let foundIndex = this.arrayProducts.findIndex(
      (e) => e.product.idProduct === product.idProduct
    );
    if (foundIndex !== -1) {
      this.arrayProducts[foundIndex]['quantity'] -= 1;
    }
    this.productsObs.next(this.arrayProducts);
  }
  getSingleProductCount(prod: Product): number {
    let foundProduct = this.arrayProducts.find(
      (e: CartProduct) => e.product.idProduct === prod.idProduct
    );
    if (foundProduct && foundProduct.quantity !== 0) {
      return foundProduct.quantity;
    } else {
      return 0;
    }
  }
  get productsInCart() {
    return this.productsObs.asObservable();
  }

}
