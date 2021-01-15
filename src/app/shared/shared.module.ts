import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from './services/common/common.service';
import { CoreService } from './services/core/core.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    CommonService,
    CoreService
  ]
})
export class SharedModule { }
