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

  addNewProduct(formValue: any) {
    return this.http.post<Product>('http://127.0.0.1:8000/api/addProduct', formValue);
  }

  deleteProduct(p: Product) {
    return this.http.delete(`http://127.0.0.1:8000/api/delete/${p.product_id}`);
  }

  updateProduct(p: Product) {
    return this.http.put<Product>(`http://127.0.0.1:8000/api/delete/${p.product_id}`, p);
  }
  
}
