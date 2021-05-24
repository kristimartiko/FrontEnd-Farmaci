import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn: boolean;
  constructor(private authService:  AuthService,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  getLogInState(): boolean {
    this.isLoggedIn = this.authService.isLoggedIn();
    if(this.isLoggedIn === true) {
      return true;
    } else return false;
  }

  navLogOut() {
    this.authService.logout();
    this.router.navigate(['/home']);
    this.snackBar.open('You logged out!', '', {
      duration: 3000
    });
  }

  isAdmin() {
    if(this.authService.getRole()) {
      return true;
    } else return false;
  }


}
