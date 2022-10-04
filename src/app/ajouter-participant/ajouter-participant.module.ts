import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterParticipantPageRoutingModule } from './ajouter-participant-routing.module';

import { AjouterParticipantPage } from './ajouter-participant.page';
import { MenuComponent } from '../menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterParticipantPageRoutingModule
  ],
  declarations: [AjouterParticipantPage,MenuComponent]
})
export class AjouterParticipantPageModule {}
