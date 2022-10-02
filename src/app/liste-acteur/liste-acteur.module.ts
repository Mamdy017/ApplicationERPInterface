import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeActeurPageRoutingModule } from './liste-acteur-routing.module';

import { ListeActeurPage } from './liste-acteur.page';
import { MenuComponent } from '../menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeActeurPageRoutingModule
  ],
  declarations: [ListeActeurPage,MenuComponent]
})
export class ListeActeurPageModule {}
