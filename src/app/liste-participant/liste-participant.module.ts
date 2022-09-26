import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeParticipantPageRoutingModule } from './liste-participant-routing.module';

import { ListeParticipantPage } from './liste-participant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeParticipantPageRoutingModule
  ],
  declarations: [ListeParticipantPage]
})
export class ListeParticipantPageModule {}
