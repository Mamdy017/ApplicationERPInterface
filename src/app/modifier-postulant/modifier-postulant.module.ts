import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifierPostulantPageRoutingModule } from './modifier-postulant-routing.module';

import { ModifierPostulantPage } from './modifier-postulant.page';
import { MenuComponent } from '../menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifierPostulantPageRoutingModule
  ],
  declarations: [ModifierPostulantPage,MenuComponent]
})
export class ModifierPostulantPageModule {}
