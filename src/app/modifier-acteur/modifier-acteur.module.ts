import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifierActeurPageRoutingModule } from './modifier-acteur-routing.module';

import { ModifierActeurPage } from './modifier-acteur.page';
import { MenuComponent } from '../menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifierActeurPageRoutingModule,
  ],
  declarations: [MenuComponent, ModifierActeurPage]
})
export class ModifierActeurPageModule {}
