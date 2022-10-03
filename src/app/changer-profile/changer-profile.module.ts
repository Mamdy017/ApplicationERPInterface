import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangerProfilePageRoutingModule } from './changer-profile-routing.module';

import { ChangerProfilePage } from './changer-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangerProfilePageRoutingModule
  ],
  declarations: [ChangerProfilePage]
})
export class ChangerProfilePageModule {}
