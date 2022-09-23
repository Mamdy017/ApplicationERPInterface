import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminAjouterActeurUserPageRoutingModule } from './admin-ajouter-acteur-user-routing.module';

import { AdminAjouterActeurUserPage } from './admin-ajouter-acteur-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminAjouterActeurUserPageRoutingModule
  ],
  declarations: [AdminAjouterActeurUserPage]
})
export class AdminAjouterActeurUserPageModule {}
