import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/auth/user.module';

@Component({
  selector: 'app-usermanagment',
  templateUrl: './usermanagment.component.html',
  styleUrls: ['./usermanagment.component.css']
})
export class UsermanagmentComponent implements OnInit {

  users: User[];
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.recieveUser().subscribe((user: User[]) => {
      this.users = user;
    })
  }

}
