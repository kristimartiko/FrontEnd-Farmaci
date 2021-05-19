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

}
