import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeGlobalePageRoutingModule } from './liste-globale-routing.module';

import { ListeGlobalePage } from './liste-globale.page';
import { MenuComponent } from '../menu/menu.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeGlobalePageRoutingModule, NgxPaginationModule,
    ReactiveFormsModule
  ],
  declarations: [ListeGlobalePage,MenuComponent]
})
export class ListeGlobalePageModule {}
