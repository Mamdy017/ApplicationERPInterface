import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageListeTiragePageRoutingModule } from './page-liste-tirage-routing.module';

import { PageListeTiragePage } from './page-liste-tirage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageListeTiragePageRoutingModule
  ],
  declarations: [PageListeTiragePage]
})
export class PageListeTiragePageModule {}
