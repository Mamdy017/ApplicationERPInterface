import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeGlobalePageRoutingModule } from './liste-globale-routing.module';

import { ListeGlobalePage } from './liste-globale.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeGlobalePageRoutingModule
  ],
  declarations: [ListeGlobalePage]
})
export class ListeGlobalePageModule {}
