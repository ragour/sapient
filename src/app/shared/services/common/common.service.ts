import { Injectable } from '@angular/core';
import { CoreService } from '../core/core.service';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private launchesSpaceX: BehaviorSubject<any> = new BehaviorSubject('');
  public launchesSpaceXGlobal = this.launchesSpaceX.asObservable();

  private launchesYearSpaceX: BehaviorSubject<any> = new BehaviorSubject('');
  public launchesYearSpaceXGlobal = this.launchesYearSpaceX.asObservable();

  private successFulLaunchesSpaceX: BehaviorSubject<boolean> = new BehaviorSubject(null);
  public successFulLaunchesSpaceXGlobal = this.successFulLaunchesSpaceX.asObservable();

  private successFulLandingSpaceX: BehaviorSubject<boolean> = new BehaviorSubject(null);
  public successFulLandingSpaceXGlobal = this.successFulLandingSpaceX.asObservable();

  constructor(
    private readonly coreService: CoreService
  ) { }

  public getLaunches(params: any, isLoad: boolean = false): void {
    this.coreService.get(params).subscribe((data:any) => {
      this.launchesSpaceX.next(data);
      if (isLoad) { this.filterLaunchesYear([...new Set(data.map((year: any) => year.launch_year))]);}
    });
  }

  public filterLaunchesYear(data):void {
    this.launchesYearSpaceX.next(data);
  }

  public set successFulLaunches(valu: boolean) {
    this.successFulLaunchesSpaceX.next(valu);
  }

  public set successFulLanding(valu: boolean) {
    this.successFulLandingSpaceX.next(valu);
  }

}
