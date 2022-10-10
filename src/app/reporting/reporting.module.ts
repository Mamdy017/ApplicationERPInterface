import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


import { ReportingPageRoutingModule } from './reporting-routing.module';

import { ReportingPage } from './reporting.page';
import { MenuComponent } from '../menu/menu.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportingPageRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
    
  ],
  declarations: [ReportingPage,MenuComponent]
})
export class ReportingPageModule {}
