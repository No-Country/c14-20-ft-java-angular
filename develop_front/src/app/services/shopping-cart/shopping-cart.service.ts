import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { CartProduct } from 'src/app/interfaces/CartProduct.interface';
import { Product } from 'src/app/mock/interfaces/Product.interface';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  //aca deberia hacer un get a los pedidos del usuario que esten en el carrito y traerlos
  private _totalPriceInCart: number = 0;
  arrayProducts: CartProduct[] = [];
  productsObs: BehaviorSubject<CartProduct[]> = new BehaviorSubject<
    CartProduct[]
  >(this.arrayProducts);
  totalPrice: number = 0;
  totalObs: BehaviorSubject<number> = new BehaviorSubject<number>(0);
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

  get totalPriceInCart(): number {
    return this._totalPriceInCart;
  }

  set totalPriceInCart(value: number) {
    this._totalPriceInCart = value;
  }

  updateTotalPrice() {
    let totalPrice = 0;

    this.arrayProducts.forEach((element) => {
      totalPrice += element.quantity * element.product.price;
    });

    this.totalPrice = totalPrice;
    this.totalObs.next(this.totalPrice); // Notifica a los suscriptores sobre el cambio en el precio total
    this.totalPriceInCart = this.totalPrice; // Actualiza la propiedad totalPriceInCart
  }
  }
