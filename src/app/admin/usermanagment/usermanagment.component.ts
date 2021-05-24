import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/auth/user.module';
import { MatDialog } from '@angular/material/dialog';
import { EditUserComponent } from './edit-user/edit-user.component';

@Component({
  selector: 'app-usermanagment',
  templateUrl: './usermanagment.component.html',
  styleUrls: ['./usermanagment.component.css']
})
export class UsermanagmentComponent implements OnInit {

  users: User[];
  constructor(private authService: AuthService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.authService.recieveUser().subscribe((user: User[]) => {
      this.users = user;
      console.log(user);
    });
  }

  updateUser(user: any) {
    let dialogRef = this.dialog.open(EditUserComponent, {
      width: '40%',
      data: user
    });

    dialogRef.afterClosed().subscribe(changed => {
      if(changed) {
        this.authService.recieveUser().subscribe((data) => {
          this.users = data
        });
      }
    }); 
  }

  deleteUser(id: number) {
    this.authService.deleteUser(this.users[id]).subscribe(() => {
      this.users.splice(id, 1);
    });
  }
}
