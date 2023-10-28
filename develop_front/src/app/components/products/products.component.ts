import { Component, OnInit } from '@angular/core';
import { cart } from 'src/app/interfaces/CartProduct.interface';
import { Product } from 'src/app/interfaces/Product.interface';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  allProducts:undefined | Product[];
  singleProductCount: number = 0;
  productData: undefined | Product;
  productQuantity : number= 1;
  removeCart=false;
  cartData:Product|undefined;
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.productService.trendyProducts().subscribe((data)=>{
      this.allProducts=data;
    });
    this.singleProductCount= this.singleProductCount;
    
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

  handleQuantity(val:string){
    if(this.productQuantity<20 && val==='plus'){
      this.productQuantity+=1;
    }else if(this.productQuantity>1 && val==='min'){
      this.productQuantity-=1;
    }
  }
}
