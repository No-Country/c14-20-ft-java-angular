import { Component, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/interfaces/CartProduct.interface';
import { CredentialsService } from 'src/app/services/credentials.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';
import {  Router } from '@angular/router';
import { LoginUser } from 'src/app/mock/interfaces/Login.interface';
import { TokenService } from 'src/app/mock/service/token.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  userData!: LoginUser;
  count: number = 0;
  isLogged= false;
  isAuthorized= false;
  constructor(
    private shoppingCartService: ShoppingCartService,
    private credentials: CredentialsService,
    private router: Router,
    private tokenService: TokenService
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
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
    if(this.tokenService.getAuthorities()){
      this.isAuthorized=true;
    }else{
      this.isAuthorized=false;
    }
  }

  redirectTo(path: string) {
    this.router.navigate([path]);
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }
}
