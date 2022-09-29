import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RenitialisationMotDePassePageRoutingModule } from './renitialisation-mot-de-passe-routing.module';

import { RenitialisationMotDePassePage } from './renitialisation-mot-de-passe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RenitialisationMotDePassePageRoutingModule
  ],
  declarations: [RenitialisationMotDePassePage]
})
export class RenitialisationMotDePassePageModule {}
