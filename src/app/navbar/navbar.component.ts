import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn: boolean;
  constructor(private authService:  AuthService) { }

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
  }

  isAdmin() {
    if(this.authService.getRole()) {
      return true;
    } else return false;
  }


}
