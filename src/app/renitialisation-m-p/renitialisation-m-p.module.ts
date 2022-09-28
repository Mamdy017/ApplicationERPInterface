import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RenitialisationMPPageRoutingModule } from './renitialisation-m-p-routing.module';

import { RenitialisationMPPage } from './renitialisation-m-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RenitialisationMPPageRoutingModule
  ],
  declarations: [RenitialisationMPPage]
})
export class RenitialisationMPPageModule {}
