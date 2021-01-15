import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common/common.service';

@Component({
  selector: '[app-sidebar]',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public listOfLaunchYear: any;
  public isYearSelected: string;
  public islaunch: string;
  public islanding: string;
  
  constructor(
    private readonly commonService: CommonService
  ) { 
    this.listOfLaunchYear = new Array();
  }

  ngOnInit(): void {
    this.commonService.launchesYearSpaceXGlobal.subscribe((listOfLaunchYear: any) => this.listOfLaunchYear = listOfLaunchYear)
  }

  public selectByyear(year: any): void {
    this.isYearSelected =  this.isYearSelected === year ? '' : year;
    this.commonService.getLaunches(this.getprepareQueryparams());
  }

  public successfulLaunch(islaunch: string): void {
    this.islaunch =  this.islaunch === islaunch ? '' : islaunch;
    this.commonService.getLaunches(this.getprepareQueryparams());
  }

  public successfulLanding(islanding: string): void {
    this.islanding =  this.islanding === islanding ? '' : islanding;
    this.commonService.getLaunches(this.getprepareQueryparams());
  }

  public getprepareQueryparams(): string {
    let url = `?limit=100`;
    if (this.isYearSelected) {
      url = `${url}&launch_year=${this.isYearSelected}`;
    }
    if (this.islaunch) {
      url = `${url}&launch_success=${this.islaunch}`;
    }
    if (this.islanding) {
      url = `${url}&land_success=${this.islanding}`;
    }
    return  url
  }

}
