import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User.interface';
import { CredentialsService } from 'src/app/services/credentials.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  userData!: User;
  count!: number;
  constructor(
    private shoppingCartService: ShoppingCartService,
    private credentials: CredentialsService
  ) {}
  ngOnInit() {
    this.shoppingCartService.productsInCart.subscribe((data) => {
      this.count = data.length;
      console.log(this.count);
      this.credentials.userData.subscribe((data) => (this.userData = data));
      console.log(this.userData);
    });
  }
}
