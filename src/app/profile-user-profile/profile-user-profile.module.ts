import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileUserProfilePageRoutingModule } from './profile-user-profile-routing.module';

import { ProfileUserProfilePage } from './profile-user-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileUserProfilePageRoutingModule
  ],
  declarations: [ProfileUserProfilePage]
})
export class ProfileUserProfilePageModule {}
