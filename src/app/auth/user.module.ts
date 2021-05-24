import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export class User { 
  public user_id: number;
  public emri: string;
  public mbiemri: string;
  public email: string;
  public password: string;

  constructor(emri: string, mbiemri: string, email: string, password: string) {
    this.emri = emri;
    this.mbiemri = mbiemri;
    this.email = email;
    this.password = password;
  }
}
