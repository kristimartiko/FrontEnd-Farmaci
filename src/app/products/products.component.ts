import { Component, OnInit } from '@angular/core';
import { Product } from './product.module';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.recieveProducts().subscribe((products: Product[]) => {
      this.products = products;
      console.log(this.products);
    })
  }

}
