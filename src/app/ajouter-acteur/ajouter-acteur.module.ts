import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterActeurPageRoutingModule } from './ajouter-acteur-routing.module';

import { AjouterActeurPage } from './ajouter-acteur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterActeurPageRoutingModule
  ],
  declarations: [AjouterActeurPage]
})
export class AjouterActeurPageModule {}
