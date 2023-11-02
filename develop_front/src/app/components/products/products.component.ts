import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/mock/interfaces/Product.interface';
import { ProductService } from 'src/app/mock/service/product.service';
import { TokenService } from 'src/app/mock/service/token.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productos: Product[] = [];
  singleProductCount: number = 0;
  @Input() product!: Product;

  constructor(private prodS: ProductService, 
    private tokenService: TokenService,
    private shoppingCartService: ShoppingCartService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarProducto();
    
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    this.shoppingCartService.productsInCart.subscribe((data) =>
      console.log(data)
    );
    this.singleProductCount = this.shoppingCartService.getSingleProductCount(
      this.product
    );

  }

  cargarProducto(): void{
    this.prodS.list().subscribe(
      data =>{
        this.productos = data;
      }
    )
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
