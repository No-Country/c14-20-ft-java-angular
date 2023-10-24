import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Product.interface';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
  arrayProducts: Product[] = [];
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.productService.products.subscribe((data) => {
      this.arrayProducts = data;
      console.log(this.arrayProducts);
    });
  }
}