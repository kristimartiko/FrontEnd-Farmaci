import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from 'src/app/products/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productEditForm: FormGroup;
  
  constructor(@Inject(MAT_DIALOG_DATA) public product: any,
  private productService: ProductService,
  private matDialogRef: MatDialogRef<EditProductComponent>) { }

  ngOnInit(): void {
      this.productEditForm = new FormGroup({
        'emri': new FormControl(this.product.emri, Validators.required),
        'cmimi': new FormControl(this.product.cmimi, Validators.required),
        'imazhi': new FormControl(this.product.imazhi, Validators.required),
        'pershkrimi': new FormControl(this.product.pershkrimi, Validators.required),
        'product_id': new FormControl(this.product.product_id)
      });
  }

  onSubmit() {
    this.productService.updateProduct(this.productEditForm.value).subscribe(() => {
      this.matDialogRef.close(true);
    })
  }

  onClose() {
    this.matDialogRef.close(false);
  }
}
