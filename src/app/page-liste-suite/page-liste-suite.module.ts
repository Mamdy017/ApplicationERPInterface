import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageListeSuitePageRoutingModule } from './page-liste-suite-routing.module';

import { PageListeSuitePage } from './page-liste-suite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageListeSuitePageRoutingModule
  ],
  declarations: [PageListeSuitePage]
})
export class PageListeSuitePageModule {}
