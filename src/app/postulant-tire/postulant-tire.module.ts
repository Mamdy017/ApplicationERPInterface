import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostulantTirePageRoutingModule } from './postulant-tire-routing.module';

import { PostulantTirePage } from './postulant-tire.page';
import { MenuComponent } from '../menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostulantTirePageRoutingModule
  ],
  declarations: [PostulantTirePage,MenuComponent]
})
export class PostulantTirePageModule {}
