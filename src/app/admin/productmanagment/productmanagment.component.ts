import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/products/product.module';
import { ProductService } from 'src/app/products/product.service';
import { MatDialog } from '@angular/material/dialog';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AddProductComponent } from './add-product/add-product.component';

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

  deleteProduct(index: number) {
    this.productService.deleteProduct(this.products[index]).subscribe(() => {
      this.products.splice(index, 1);
    })
  }

  updateProduct(product: Product) {
    let dialogRef = this.dialog.open(EditProductComponent, {
      width: '40%',
      data: product
    });

    dialogRef.afterClosed().subscribe(change => {
      if(change) {
        this.productService.recieveProducts().subscribe((product) => {
          this.products = product;
        })
      }
    });
  }

  newProduct() {
    let dialogRef = this.dialog.open(AddProductComponent, {
      width: '40%'
    });

    dialogRef.afterClosed().subscribe(change => {
      if(change) {
        this.productService.recieveProducts().subscribe((product) => {
          this.products = product;
        });
      }
    }) 
  }
 
}
