import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-product]',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public product: any;
  @Input() public set productDetails (productData: any) {
    this.product = productData;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
