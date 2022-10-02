import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailActivitePageRoutingModule } from './detail-activite-routing.module';

import { DetailActivitePage } from './detail-activite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailActivitePageRoutingModule
  ],
  declarations: [DetailActivitePage]
})
export class DetailActivitePageModule {}
