import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: any[] = [];
  total: number = 0;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCart().subscribe((response: any[]) => {
      this.products = response
      console.log(this.products);
      for(let cartEl of this.products) {
        this.total = this.total + cartEl.sasi * cartEl.cmimi;
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
    });
  }

  getTotal() {
    
  }
}
