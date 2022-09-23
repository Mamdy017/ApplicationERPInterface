import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeActeurPageRoutingModule } from './liste-acteur-routing.module';

import { ListeActeurPage } from './liste-acteur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeActeurPageRoutingModule
  ],
  declarations: [ListeActeurPage]
})
export class ListeActeurPageModule {}
