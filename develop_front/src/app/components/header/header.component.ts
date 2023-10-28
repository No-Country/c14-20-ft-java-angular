import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';
import { Product } from 'src/app/interfaces/Product.interface';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  menuType: string = 'default';
  adminName:string="";
  adminLastName:string="";
  userName:string="";
  userLastName:string="";
  searchResult:undefined|Product[];
  cartItems=0;
  constructor(private route: Router, private product:ProductService) {}

  ngOnInit(): void {
    this.route.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('admin') && val.url.includes('admin')) {
         let adminStore=localStorage.getItem('admin');
         let adminData =adminStore && JSON.parse(adminStore)[0];
         this.adminName=adminData.name;
         this.adminLastName=adminData.lastName;
          this.menuType = 'admin';
        }
        else if(localStorage.getItem('user')){
          let userStore = localStorage.getItem('user');
          let userData = userStore && JSON.parse(userStore);
          this.userName= userData.name;
          this.userLastName=userData.lastName;
          this.menuType='user';
          this.product.getCartList(userData.id);
        }
         else {
          this.menuType = 'default';
        }
      }
    });
    let cartData= localStorage.getItem('localCart');
    if(cartData){
      this.cartItems= JSON.parse(cartData).length
    }
    this.product.cartData.subscribe((items)=>{
      this.cartItems= items.length
    })
  }
  logout(){
    localStorage.removeItem('admin');
    this.route.navigate([''])
  }

  userLogout(){
    localStorage.removeItem('user');
    this.route.navigate([''])
    this.product.cartData.emit([])
  }

}
