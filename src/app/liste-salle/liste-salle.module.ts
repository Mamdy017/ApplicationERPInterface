import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeSallePageRoutingModule } from './liste-salle-routing.module';

import { ListeSallePage } from './liste-salle.page';
import { MenuComponent } from '../menu/menu.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {  Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeSallePageRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  declarations: [ListeSallePage,MenuComponent]
})
export class ListeSallePageModule {}
