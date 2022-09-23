import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostulantTirePageRoutingModule } from './postulant-tire-routing.module';

import { PostulantTirePage } from './postulant-tire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostulantTirePageRoutingModule
  ],
  declarations: [PostulantTirePage]
})
export class PostulantTirePageModule {}
