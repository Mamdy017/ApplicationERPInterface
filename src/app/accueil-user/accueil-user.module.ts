import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccueilUserPageRoutingModule } from './accueil-user-routing.module';

import { AccueilUserPage } from './accueil-user.page';
import { MenuComponent } from '../menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccueilUserPageRoutingModule
  ],
  declarations: [AccueilUserPage,MenuComponent]
})
export class AccueilUserPageModule {}
