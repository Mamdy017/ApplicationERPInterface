import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeaderUserPageRoutingModule } from './header-user-routing.module';

import { HeaderUserPage } from './header-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderUserPageRoutingModule
  ],
  declarations: [HeaderUserPage]
})
export class HeaderUserPageModule {}
