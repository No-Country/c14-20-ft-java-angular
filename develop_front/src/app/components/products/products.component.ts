import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/mock/interfaces/Product.interface';
import { ProductService } from 'src/app/mock/service/product.service';
import { TokenService } from 'src/app/mock/service/token.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  arrayProducts: Product[] = [];

  constructor(private prodS: ProductService, 
    private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarProducto();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    this.prodS.products.subscribe((data) => {
      this.arrayProducts = data;
      console.log(this.arrayProducts);
    });
  }

  cargarProducto(): void{
    this.prodS.lista().subscribe(
      data =>{
        this.arrayProducts = data;
      }
    )
  }
}
