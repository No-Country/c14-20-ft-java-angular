import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/Product.interface';
import { ProductService } from 'src/app/services/product/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css'],
})
export class ProductInfoComponent implements OnInit {
  product: Product = null!;
  @Input() producto!: Product;
  singleProductCount: number = 0;
  image: string= "https://i.imgur.com/cZurIW1.jpg";
  name: string = "Ensalada Quinua" ;
  description: string = "Quinua con salmon, rabano, palta y arbejas" ;
  price: number= 5.0 ;

  constructor(
    private route: ActivatedRoute,
    private prodS: ProductService,
    private shoppingCartService: ShoppingCartService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.prodS.getProductById(id).subscribe(product => {
      if (product) {
        this.product = product;
        console.log(this.product);
        this.singleProductCount = this.shoppingCartService.getSingleProductCount(this.product);
      } else {
        console.error(`Producto con id ${id} no encontrado.`);
      }
    });
  
    this.shoppingCartService.productsInCart.subscribe((data) => console.log(data));
  }

  onAddToCart() {
    this.shoppingCartService.addToCart(this.product);
    this.singleProductCount = this.shoppingCartService.getSingleProductCount(
      this.product
    );
    console.log(this.singleProductCount);
  }
  onDelete() {
    this.shoppingCartService.deleteFromCart(this.product);
    this.singleProductCount = this.shoppingCartService.getSingleProductCount(
      this.product
    );
    console.log(this.singleProductCount);
  }
}
