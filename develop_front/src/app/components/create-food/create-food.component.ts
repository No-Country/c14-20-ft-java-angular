import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/mock/interfaces/Product.interface';
import { ProductService } from 'src/app/mock/service/product.service';

@Component({
  selector: 'app-create-food',
  templateUrl: './create-food.component.html',
  styleUrls: ['./create-food.component.css']
})
export class CreateFoodComponent implements OnInit {
  name!: string;
  description!: string;
  price!: number;
  stock!: number;
  image!: string;

  constructor(private prodS: ProductService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const producto = new Product (this.name, this.description, this.price, this.stock, this.image);
    this.prodS.save(producto).subscribe(
      data =>{
        alert("Producto añadido correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("falló");
        this.router.navigate(['']);
      }
    )
}
}
