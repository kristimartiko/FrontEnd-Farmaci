import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

 @Injectable({
    providedIn: 'root'
})

export class AdminGuard implements CanActivate {

    userState: String;
    constructor(private authService: AuthService,
      private router: Router) {}

     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):   Observable<boolean> | Promise<boolean> | boolean {
      if(this.authService.getRole()) {
        return true;
      } else 
      alert("Nuk je Admin");
      return false;
     }

}