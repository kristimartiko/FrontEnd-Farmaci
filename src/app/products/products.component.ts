import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Product } from './product.module';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  constructor(private productService: ProductService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.productService.recieveProducts().subscribe((products: Product[]) => {
      this.products = products;
      console.log(this.products);
    })
  }

  addToCart(index: number) {
    this.cartService.shtoNeShporte(this.products[index].product_id);
  }

}
