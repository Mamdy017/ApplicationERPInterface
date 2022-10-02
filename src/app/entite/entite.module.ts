import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntitePageRoutingModule } from './entite-routing.module';

import { EntitePage } from './entite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntitePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EntitePage]
})
export class EntitePageModule {}
