import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PurchasesService {

  constructor(private http: HttpClient) { }

  getPurchases() {
    return this.http.get('http://127.0.0.1:8000/api/getPurchases');
  }
}
