import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeSallePageRoutingModule } from './liste-salle-routing.module';

import { ListeSallePage } from './liste-salle.page';
import { MenuComponent } from '../menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeSallePageRoutingModule
  ],
  declarations: [ListeSallePage,MenuComponent]
})
export class ListeSallePageModule {}
