import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeTiragePageRoutingModule } from './liste-tirage-routing.module';

import { ListeTiragePage } from './liste-tirage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeTiragePageRoutingModule
  ],
  declarations: [ListeTiragePage]
})
export class ListeTiragePageModule {}
