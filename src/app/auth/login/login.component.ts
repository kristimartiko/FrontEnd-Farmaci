import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logInForm: FormGroup;
  error1: string;
  constructor(private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.logInForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit() {
    this.authService.login(this.logInForm.value).subscribe(response => {
      let token = JSON.parse(JSON.stringify(response));
      console.log(response);
      localStorage.setItem('token', token);
      this.authService.isAdmin();
      this.logInForm.reset();
        this.router.navigate(['/home']);
        this.snackBar.open('Successfully logged in!', '', {
          duration: 3000
        });
    }, error => {
      this.error1 = "Invalid Email/Password!"
    });
  }
}
