import { Injectable } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import { AuthService } from './auth/auth.service';

@Injectable({
    providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

    constructor(private authService: AuthService) {}

    intercept(req, next){  

      if(this.authService.getToken() == null){
        return next.handle(req);
      }    
      
        let tokenizedReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authService.getToken()}`
        }
        });
        return next.handle(tokenizedReq);
      }
}