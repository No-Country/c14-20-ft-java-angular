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
      let newProductInCart: CartProduct = { product, quantity: 1 };
      this.arrayProducts.push(newProductInCart);
    }
    this.productsObs.next(this.arrayProducts);
    console.log(this.arrayProducts);
    // this.updateTotal();
    // console.log(this.arrayProducts);
    // this.toastr.success('added');
  }

  get productsInCart() {
    return this.productsObs.asObservable();
  }
}
