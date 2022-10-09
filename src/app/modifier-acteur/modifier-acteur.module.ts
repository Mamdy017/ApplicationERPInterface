import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifierActeurPageRoutingModule } from './modifier-acteur-routing.module';

import { ModifierActeurPage } from './modifier-acteur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifierActeurPageRoutingModule
  ],
  declarations: [ModifierActeurPage]
})
export class ModifierActeurPageModule {}
