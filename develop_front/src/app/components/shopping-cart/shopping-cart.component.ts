import { Component, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/interfaces/CartProduct.interface';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  cartProducts!: CartProduct[];
  constructor(private shoppingCartService: ShoppingCartService) {}
  ngOnInit(): void {
    this.cartProducts = [
      {
        product: {
          idProduct: 1,
          name: 'Ensalada Quinua',
          description: 'Quinua con salmon, rabano, palta y arbejas',
          createdAt: '2023-10-01T08:00:00Z',
          updatedAt: '2023-10-05T14:30:00Z',
          price: 5,
          stock: 50,
          image: 'https://i.imgur.com/cZurIW1.jpg',
          enable: true,
        },
        quantity: 1,
      },
      {
        product: {
          idProduct: 2,
          name: 'Ensalada de lentejas',
          description: 'Lentejas con lechuga, pepino, quinua, palta y pan',
          createdAt: '2023-10-02T09:15:00Z',
          updatedAt: '2023-10-04T16:45:00Z',
          price: 8,
          stock: 30,
          image: 'https://i.imgur.com/6N5SIAI.jpg',
          enable: true,
        },
        quantity: 1,
      },
      {
        product: {
          idProduct: 3,
          name: 'Vegetales crudos',
          description: 'Zanahoria, arbejas, tomates secos y arroz',
          createdAt: '2023-10-03T10:30:00Z',
          updatedAt: '2023-10-03T10:45:00Z',
          price: 3,
          stock: 45,
          image: 'https://i.imgur.com/57TesQb.jpg',
          enable: true,
        },
        quantity: 1,
      },
    ];
    // this.shoppingCartService.productsInCart.subscribe((data) => {
    //   this.cartProducts = data;
    //   console.log(this.cartProducts);
    // });
  }
}
