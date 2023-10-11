import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/interfaces/Product.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  arrayProducts: Product[] = [];
  arrayObs: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  constructor(private http: HttpClient) {}
  get products() {
    return this.http.get<Product[]>('../../../assets/data/jsonsd.json');
  }
}
