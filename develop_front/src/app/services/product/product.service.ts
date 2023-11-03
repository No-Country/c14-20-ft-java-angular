import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Product } from 'src/app/interfaces/Product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private arrayProducts: Product[] = [];
  private arrayObs: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  constructor(private http: HttpClient) {
    this.loadProducts();
  }

  private loadProducts() {
    this.http.get<Product[]>('../../../assets/data/jsonsd.json').subscribe(products => {
      this.arrayProducts = products;
      this.arrayObs.next(this.arrayProducts);
      console.log('Products loaded:', this.arrayProducts);
    });
  }

  get products(): Observable<Product[]> {
    return this.arrayObs.asObservable();
  }

  getProductById(id: number): Observable<Product | undefined> {
    return this.products.pipe(
      map(products => products.find(product => product.idProduct === id))
    );
  }
}
