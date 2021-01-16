import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart, NavigationEnd } from '@angular/router';
import { CommonService } from 'src/app/shared/services/common/common.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly commonService: CommonService
  ) {
    this.router.events.subscribe((event) =>  {
      if(event instanceof NavigationEnd) {
        const params = decodeURIComponent(window.location.href).split('?')[1];
        if (params) {
          this.commonService.getLaunches(`/?${params}`);
        }
      }
    })
   }

  ngOnInit(): void {
   
  }

}
