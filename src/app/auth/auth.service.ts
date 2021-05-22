import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.module';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private state: String;

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
    //return this.http.get("http://127.0.0.1:8000/api/logout");
    localStorage.removeItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    if(localStorage.getItem('token') !== null) {
      //let token = localStorage.getItem('token');
      return true;
    } else return false;
  }

  isAdmin() {
    return this.http.get('http://127.0.0.1:8000/api/isAdmin').subscribe((state) => {
      let userState = JSON.parse(JSON.stringify(state));
      localStorage.setItem('role', userState);
    });
  }

  getRole() {
    if(localStorage.getItem('role') == "Admin") {
      return true;
    } else return false;
  }


}
