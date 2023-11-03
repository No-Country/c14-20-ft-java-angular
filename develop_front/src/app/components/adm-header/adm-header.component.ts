import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartProduct } from 'src/app/interfaces/CartProduct.interface';
import { User } from 'src/app/interfaces/User.interface';
import { CredentialsService } from 'src/app/services/credentials/credentials.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-adm-header',
  templateUrl: './adm-header.component.html',
  styleUrls: ['./adm-header.component.css']
})
export class AdmHeaderComponent implements OnInit {
  userData!: User;
  count: number = 0; //si se trae los datos del back aca la cantidad  deberia iniciarlizarse con los datos de lback, no en 0
  constructor(
    private shoppingCartService: ShoppingCartService,
    private credentials: CredentialsService,
    private router: Router
  ) {}
  ngOnInit() {
    this.shoppingCartService.productsInCart.subscribe((data) => {
      this.count = data.reduce((acc: number, e: CartProduct) => {
        acc += e.quantity;
        return acc;
      }, 0);
      console.log(this.count);
      this.credentials.userData.subscribe((data) => (this.userData = data));
      console.log(this.userData);
    });
  }

  redirectTo(path: string) {
    this.router.navigate([path]);
  }
}