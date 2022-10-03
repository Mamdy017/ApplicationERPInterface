import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeTirageNonvalidePageRoutingModule } from './liste-tirage-nonvalide-routing.module';

import { ListeTirageNonvalidePage } from './liste-tirage-nonvalide.page';
import { MenuComponent } from '../menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeTirageNonvalidePageRoutingModule
  ],
  declarations: [ListeTirageNonvalidePage,MenuComponent]
})
export class ListeTirageNonvalidePageModule {}
