import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { error } from 'selenium-webdriver';

declare var require: any;
const FileServer = require('file-saver');

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  products: any[] = [];
  total: number = 0;

  constructor(private cartService: CartService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.cartService.getCart().subscribe((response: any[]) => {
      this.products = response
      console.log(this.products);
      for(let cartEl of this.products) {
        this.total = this.total + cartEl.sasi * cartEl.cmimi;
        this.total = Math.trunc(this.total);
      }
    })
  }

  deleteItem(index: number) {
    this.cartService.fshijNgaShporta(this.products[index].shporte_id).subscribe(() => {
      this.products.splice(index, 1);
      window.location.reload();
    });
  }

  incrementQuantity(index: number) {
    this.cartService.shtoSasi(this.products[index].shporte_id).subscribe(() => {
      this.products[index].sasi = this.products[index].sasi + 1;
      window.location.reload();
    });
  }

  decrementQuantity(index: number) {
    if(this.products[index].sasi <= 1) {
      this.cartService.fshijNgaShporta(this.products[index].shporte_id).subscribe(() => {
        this.products.splice(index, 1);
        window.location.reload();
      });
    } 
    this.cartService.zbritSasi(this.products[index].shporte_id).subscribe(() => {
      this.products[index].sasi = this.products[index].sasi - 1;
      window.location.reload();
    });
  }

  isEmpty() {
    if(this.products.length == 0) {
      return true;
    } else return false;
  }

  purchase() {
    this.cartService.makePurchase().subscribe(() => {
      window.location.reload();
    }, error => {
      this.snackBar.open('Produkti Nuk Ka Mjaftueshem Sasi', '', {
      duration: 3000
      })
    });
  }

}
