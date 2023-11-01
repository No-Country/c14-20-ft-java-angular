import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/Product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  URL = environment.URL + '/api/products'


  constructor(private httpClient : HttpClient) { }

  public list(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.URL);
  }

  public detail(id: number): Observable<Product>{
    return this.httpClient.get<Product>(this.URL + `/${id}`);
  }

  public save(product: Product): Observable<any>{
    return this.httpClient.post<any>(this.URL, product);
  }

  public update(id: number, product: Product): Observable<any>{
    return this.httpClient.put<any>(this.URL + `/${id}`, product);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `/${id}`);
  }


}
