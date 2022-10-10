import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterActivatePageRoutingModule } from './ajouter-activate-routing.module';

import { AjouterActivatePage } from './ajouter-activate.page';
import { MenuComponent } from '../menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterActivatePageRoutingModule
  ],
  declarations: [AjouterActivatePage,MenuComponent]
})
export class AjouterActivatePageModule {}
