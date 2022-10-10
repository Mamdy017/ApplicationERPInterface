import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionentitePageRoutingModule } from './gestionentite-routing.module';

import { GestionentitePage } from './gestionentite.page';
import { MenuComponent } from '../menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionentitePageRoutingModule
  ],
  declarations: [GestionentitePage,MenuComponent]
})
export class GestionentitePageModule {}
