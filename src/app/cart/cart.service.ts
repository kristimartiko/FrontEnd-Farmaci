import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http :HttpClient) { }

  getCart() {
    return this.http.get('http://127.0.0.1:8000/api/getShporte');
  }
  
  shtoNeShporte(id: number) {
    return this.http.post(`http://127.0.0.1:8000/api/addToCart/${id}`, id).subscribe((postData: any) => {
      console.log(postData);
    });
  }

  fshijNgaShporta(id: number): Observable<void> {
    return this.http.delete<void>(`http://127.0.0.1:8000/api/cartDelete/${id}`);
  }

  shtoSasi(id: number) {
    return this.http.get(`http://127.0.0.1:8000/api/shtoSasi/${id}`);
  }

  zbritSasi(id: number) {
    return this.http.get(`http://127.0.0.1:8000/api/hiqSasi/${id}`);
  }

  makePurchase() {
    return this.http.get('http://127.0.0.1:8000/api/purchase');
  }
}
