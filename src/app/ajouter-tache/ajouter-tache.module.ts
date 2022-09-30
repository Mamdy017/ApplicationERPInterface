import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterTachePageRoutingModule } from './ajouter-tache-routing.module';

import { AjouterTachePage } from './ajouter-tache.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterTachePageRoutingModule
  ],
  declarations: [AjouterTachePage]
})
export class AjouterTachePageModule {}
