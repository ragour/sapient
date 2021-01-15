import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductComponent } from './product/product.component';
import { SharedModule } from '../shared/shared.module';
import { ModulesRoutingModule } from './modules-routing.module';
import { CommonService } from '../shared/services/common/common.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [MainComponent, SidebarComponent, ProductlistComponent, ProductComponent],
  imports: [
    CommonModule,
    SharedModule,
    ModulesRoutingModule,
    HttpClientModule
  ],
  providers: [CommonService]
})
export class ModulesModule { }
