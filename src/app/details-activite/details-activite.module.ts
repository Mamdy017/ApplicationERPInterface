import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsActivitePageRoutingModule } from './details-activite-routing.module';

import { DetailsActivitePage } from './details-activite.page';
import { MenuComponent } from '../menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsActivitePageRoutingModule
  ],
  declarations: [DetailsActivitePage,MenuComponent]
})
export class DetailsActivitePageModule {}
