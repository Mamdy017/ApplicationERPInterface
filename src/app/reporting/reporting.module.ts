import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportingPageRoutingModule } from './reporting-routing.module';

import { ReportingPage } from './reporting.page';
import { MenuComponent } from '../menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportingPageRoutingModule
  ],
  declarations: [ReportingPage,MenuComponent]
})
export class ReportingPageModule {}
