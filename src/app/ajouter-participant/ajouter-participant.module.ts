import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterParticipantPageRoutingModule } from './ajouter-participant-routing.module';

import { AjouterParticipantPage } from './ajouter-participant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterParticipantPageRoutingModule
  ],
  declarations: [AjouterParticipantPage]
})
export class AjouterParticipantPageModule {}
