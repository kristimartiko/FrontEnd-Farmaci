import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product.module';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  recieveProducts() {
    return this.http.get<Product[]>('http://127.0.0.1:8000/api/getAllProducts');
  }

  
}
