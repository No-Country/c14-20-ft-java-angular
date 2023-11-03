import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Product.interface';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
  producto: Product[] = [];

  constructor(
    private prodS: ProductService) { }
  isLogged = false;

  ngOnInit(): void {
    this.prodS.products.subscribe((data) => {
      this.producto = data;
      console.log(this.producto);
    });
  }
}