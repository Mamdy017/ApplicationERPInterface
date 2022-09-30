import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeTirageNonvalidePageRoutingModule } from './liste-tirage-nonvalide-routing.module';

import { ListeTirageNonvalidePage } from './liste-tirage-nonvalide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeTirageNonvalidePageRoutingModule
  ],
  declarations: [ListeTirageNonvalidePage]
})
export class ListeTirageNonvalidePageModule {}
