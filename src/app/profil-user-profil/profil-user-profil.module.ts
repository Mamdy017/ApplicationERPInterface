import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilUserProfilPageRoutingModule } from './profil-user-profil-routing.module';

import { ProfilUserProfilPage } from './profil-user-profil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilUserProfilPageRoutingModule
  ],
  declarations: [ProfilUserProfilPage]
})
export class ProfilUserProfilPageModule {}
