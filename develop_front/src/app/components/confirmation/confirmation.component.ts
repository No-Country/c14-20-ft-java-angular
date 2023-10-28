import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User.interface';
import { CredentialsService } from 'src/app/services/credentials.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit{
  

  constructor(
    private shoppingCartService: ShoppingCartService,
    private credentials: CredentialsService,
  ) {}
  ngOnInit() {
    
  }
  

}
