import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from 'src/app/products/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productAddForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public product: any,
  private productService: ProductService,
  private matDialogRef: MatDialogRef<AddProductComponent>) { }

  ngOnInit(): void {
    this.productAddForm = new FormGroup({
      'emri': new FormControl(null, Validators.required),
      'cmimi': new FormControl(null, Validators.required),
      'imazhi': new FormControl(null, Validators.required),
      'pershkrimi': new FormControl(null, Validators.required),
      'sasi': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    this.productService.addNewProduct(this.productAddForm.value).subscribe(() => {
      this.matDialogRef.close(true);
  })
}

onClose() {
  this.matDialogRef.close(false);
}

}
