import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntitePageRoutingModule } from './entite-routing.module';

import { EntitePage } from './entite.page';
import { MenuComponent } from '../menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntitePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EntitePage,MenuComponent]
})
export class EntitePageModule {}
