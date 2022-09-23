import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeaderAdminPageRoutingModule } from './header-admin-routing.module';

import { HeaderAdminPage } from './header-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderAdminPageRoutingModule
  ],
  declarations: [HeaderAdminPage]
})
export class HeaderAdminPageModule {}
