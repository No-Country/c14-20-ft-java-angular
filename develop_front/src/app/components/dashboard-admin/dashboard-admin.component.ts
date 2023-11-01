import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/mock/interfaces/Product.interface';
import { ProductService } from 'src/app/mock/service/product.service';
import { TokenService } from 'src/app/mock/service/token.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
  producto: Product[] = [];

  constructor(
    private prodS: ProductService, 
    private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEducacion(): void{
    this.prodS.lista().subscribe(
      data =>{
        this.producto = data;
      }
    )
  }

  delete(id?: number){
    if( id != undefined){
      this.prodS.delete(id).subscribe(
        data => {
          this.cargarEducacion();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }
}