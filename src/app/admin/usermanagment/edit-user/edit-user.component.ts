import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  userForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public user: any,
  private authService: AuthService,
  private matDialogRef: MatDialogRef<EditUserComponent>) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      'emri': new FormControl(this.user.emri, Validators.required),
      'mbiemri': new FormControl(this.user.mbiemri, Validators.required),
      'emaili': new FormControl(this.user.emaili, Validators.required),
      'password': new FormControl(this.user.password, Validators.required)
    });
  }

  onSubmit() {
    this.authService.updateUser(this.userForm.value, this.user.user_id).subscribe(() => {
      this.matDialogRef.close(true);
    });
  }

  onClose() {
    this.matDialogRef.close(false);
  }

}
