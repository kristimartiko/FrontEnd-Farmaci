import { Component, OnInit } from '@angular/core';
import { PurchasesService } from './purchases.service';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {

  historik: any[] = [];
  constructor(private purchasesService: PurchasesService) { }

  ngOnInit(): void {
    this.purchasesService.getPurchases().subscribe((responseData: any[]) => {
      this.historik = responseData;
      console.log(this.historik);
    })
  }

  isEmpty() {
    if(this.historik.length == 0) {
      return true;
    } else return false;
  }

}
