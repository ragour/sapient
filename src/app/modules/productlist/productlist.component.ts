import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common/common.service';

@Component({
  selector: '[app-productlist]',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
  public productListArray = new Array(5).fill(1);

  constructor(
    private readonly commonService: CommonService
  ) { 
    this.commonService.getLaunches('?limit=100', true);
  }

  ngOnInit(): void {
    this.commonService.launchesSpaceXGlobal.subscribe((productData: any) => this.productListArray = productData);
  }

}
