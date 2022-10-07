import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SallePageRoutingModule } from './salle-routing.module';

import { SallePage } from './salle.page';
import { MenuComponent } from '../menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SallePageRoutingModule
  ],
  declarations: [SallePage,MenuComponent]
})
export class SallePageModule {}
