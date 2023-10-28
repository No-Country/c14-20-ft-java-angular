import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Product.interface';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css'],
})
export class ProductInfoComponent implements OnInit {
  purchaseId: any;
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      // Obtén el parámetro 'idProduct' de la URL y conviértelo a un número
      this.purchaseId = Number(params.get('idProduct'));

      // Busca el producto por su ID en el servicio ProductService
      this.productService.products.subscribe((data) => {
        this.product = data.find(
          (e: Product) => e.idProduct === this.purchaseId
        );
        console.log(this.product);
      });
    });
  }
}
