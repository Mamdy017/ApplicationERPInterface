import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileUserProfilePageRoutingModule } from './profile-user-profile-routing.module';

import { ProfileUserProfilePage } from './profile-user-profile.page';
import { MenuComponent } from '../menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileUserProfilePageRoutingModule
  ],
  declarations: [ProfileUserProfilePage,MenuComponent]
})
export class ProfileUserProfilePageModule {}
