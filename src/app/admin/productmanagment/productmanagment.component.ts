import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/products/product.module';
import { ProductService } from 'src/app/products/product.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-productmanagment',
  templateUrl: './productmanagment.component.html',
  styleUrls: ['./productmanagment.component.css']
})
export class ProductmanagmentComponent implements OnInit {

  @Input() products: Product[] = [];
  constructor(private productService: ProductService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.productService.recieveProducts().subscribe((products) => {
      this.products = products;
    }) 
  }

 
}
