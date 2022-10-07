// import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeUserPageRoutingModule } from './liste-user-routing.module';

import { ListeUserPage } from './liste-user.page';
import { MenuComponent } from '../menu/menu.component';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeUserPageRoutingModule,
    NgxPaginationModule
  ],
  declarations: [ListeUserPage,MenuComponent]
})
export class ListeUserPageModule {}
