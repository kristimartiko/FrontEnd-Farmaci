import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'selenium-webdriver';
import { AuthService } from '../auth.service';
import { User } from '../user.module';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;
  error1: string;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'emri': new FormControl(null, Validators.required),
      'mbiemri': new FormControl(null, Validators.required),
      'emaili': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit() {
    if(this.signUpForm.valid) {
      this.authService.signup(this.signUpForm.value).subscribe((responseData : User) => {
        console.log(responseData);
        this.signUpForm.reset();
      }, error => {
        this.error1 = "Email already exists!"
      }
      );
    }
  }

}
