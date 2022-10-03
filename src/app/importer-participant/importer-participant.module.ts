import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImporterParticipantPageRoutingModule } from './importer-participant-routing.module';

import { ImporterParticipantPage } from './importer-participant.page';
import { MenuComponent } from '../menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImporterParticipantPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ImporterParticipantPage,MenuComponent]
})
export class ImporterParticipantPageModule {}
