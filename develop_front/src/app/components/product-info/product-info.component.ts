import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/mock/interfaces/Product.interface';
import { ProductService } from 'src/app/mock/service/product.service';
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

  constructor(
    private route: ActivatedRoute,
    private prodS: ProductService,
    private shoppingCartService: ShoppingCartService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.prodS.detail(id).subscribe(
      data =>{
        this.product = data;
  })

  this.shoppingCartService.productsInCart.subscribe((data) =>
      console.log(data)
    );
    this.singleProductCount = this.shoppingCartService.getSingleProductCount(
      this.product
    );
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
