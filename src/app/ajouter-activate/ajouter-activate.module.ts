import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterActivatePageRoutingModule } from './ajouter-activate-routing.module';

import { AjouterActivatePage } from './ajouter-activate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterActivatePageRoutingModule
  ],
  declarations: [AjouterActivatePage]
})
export class AjouterActivatePageModule {}
