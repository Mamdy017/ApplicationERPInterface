import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeaderAdminPageRoutingModule } from './header-admin-routing.module';

import { HeaderAdminPage } from './header-admin.page';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderAdminPageRoutingModule,
    NgChartsModule
  ],
  declarations: [HeaderAdminPage]
})
export class HeaderAdminPageModule {}
