import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.module';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private role: string = '';
  private isAdmin;
  private actualUserId: number;

  constructor(private http: HttpClient) { }

  recieveUser(): Observable<User[]> {
    return this.http.get<User[]>('http://127.0.0.1:8000/api/getUsers');
  }

  signup(formValue: any) {
    return this.http.post('http://127.0.0.1:8000/api/register', formValue);
  }

  login(formValue: any) {
    return this.http.post('http://127.0.0.1:8000/api/login', {"emaili": formValue.email, "password": formValue.password});
  }

  logout() {
    return this.http.get("http://127.0.0.1:8000/api/logout");
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
