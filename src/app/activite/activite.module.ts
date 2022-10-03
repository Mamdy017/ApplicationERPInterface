import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivitePageRoutingModule } from './activite-routing.module';

import { ActivitePage } from './activite.page';
import { MenuComponent } from '../menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivitePageRoutingModule
  ],
  declarations: [ActivitePage,MenuComponent]
})
export class ActivitePageModule {}
