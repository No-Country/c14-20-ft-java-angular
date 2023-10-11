import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Product.interface';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  arrayProducts: Product[] = [];
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.productService.products.subscribe((data) => {
      this.arrayProducts = data;
      console.log(this.arrayProducts);
    });
  }
}
