import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cart, priceSummary } from 'src/app/interfaces/CartProduct.interface';
import { Product } from 'src/app/interfaces/Product.interface';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-shopping-cart-single',
  templateUrl: './shopping-cart-single.component.html',
  styleUrls: ['./shopping-cart-single.component.css'],
})
export class ShoppingCartSingleComponent implements OnInit {
  @Input() product!: Product;
  singleProductCount: number = 0;
  productData:undefined | Product;
  productQuantity:number=1;
  removeCart=false;
  cartData: cart[] | undefined;
  priceSummary: priceSummary = {
    price: 0,
    discount: 0,
    tax: 0,
    delivery: 0,
    total: 0
  }
  constructor(private productService: ProductService, private router: Router) {}
  ngOnInit(): void {
    this.loadDetails()
  }
  onAddToCart() {
    if(this.productData){
      this.productData.quantity = this.productQuantity;
      if(!localStorage.getItem('user')){
        this.productService.localAddToCart(this.productData);
        this.removeCart=true
      }else{
        let user = localStorage.getItem('user');
        let userId= user && JSON.parse(user).id;
        let cartData:cart={
          ...this.productData,
          productId:this.productData.id,
          userId
        }
        delete cartData.id;
        this.productService.addToCart(cartData).subscribe((result)=>{
          if(result){
           this.productService.getCartList(userId);
           this.removeCart=true
          }
        })        
      }
      
    } 
  }

  loadDetails(){
    this.productService.currentCart().subscribe((result) => {
      this.cartData = result;
      console.warn(this.cartData);
      let price = 0;
      result.forEach((item) => {
        if (item.quantity) {
          price = price + (+item.price * +item.quantity)
        }
      })
      this.priceSummary.price = price;
      this.priceSummary.discount = price / 10;
      this.priceSummary.tax = price / 10;
      this.priceSummary.delivery = 100;
      this.priceSummary.total = price + (price / 10) + 100 - (price / 10);

    if(!this.cartData.length){
      this.router.navigate(['/'])
    }

    })
  }

  handleQuantity(val:string){
    if(this.productQuantity<20 && val==='plus'){
      this.productQuantity+=1;
    }else if(this.productQuantity>1 && val==='min'){
      this.productQuantity-=1;
    }
  }

}
