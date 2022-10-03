// import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeUserPageRoutingModule } from './liste-user-routing.module';

import { ListeUserPage } from './liste-user.page';
import { MenuComponent } from '../menu/menu.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeUserPageRoutingModule
  ],
  declarations: [ListeUserPage,MenuComponent]
})
export class ListeUserPageModule {}
