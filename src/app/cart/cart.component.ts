import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

   products: any[] = [];
  index: number;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCart().subscribe((response: any[]) => {
      this.products = response
      console.log(this.products);
    })
  }

  deleteItem(index: number) {
    this.cartService.fshijNgaShporta(this.products[index].shporte_id).subscribe(() => {
      this.products.splice(index, 1);
    });
  }

  incrementQuantity(index: number) {
    this.cartService.shtoSasi(this.products[index].shporte_id).subscribe(() => {
      this.products[index].sasi = this.products[index].sasi + 1;
    });
  }

  decrementQuantity(index: number) {
    if(this.products[index].sasi <= 1) {
      this.cartService.fshijNgaShporta(this.products[index].shporte_id).subscribe(() => {
        this.products.splice(index, 1);
      });
    } 
    this.cartService.zbritSasi(this.products[index].shporte_id).subscribe(() => {
      this.products[index].sasi = this.products[index].sasi - 1;
    });
  }

  isEmpty() {
    if(this.products.length == 0) {
      return true;
    } else return false;
  }
}
