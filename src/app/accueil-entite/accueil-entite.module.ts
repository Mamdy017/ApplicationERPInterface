import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccueilEntitePageRoutingModule } from './accueil-entite-routing.module';

import { AccueilEntitePage } from './accueil-entite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccueilEntitePageRoutingModule
  ],
  declarations: [AccueilEntitePage]
})
export class AccueilEntitePageModule {}
