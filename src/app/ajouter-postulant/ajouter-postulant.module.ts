import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterPostulantPageRoutingModule } from './ajouter-postulant-routing.module';

import { AjouterPostulantPage } from './ajouter-postulant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterPostulantPageRoutingModule
  ],
  declarations: [AjouterPostulantPage]
})
export class AjouterPostulantPageModule {}
