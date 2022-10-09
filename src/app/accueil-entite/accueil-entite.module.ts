import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccueilEntitePageRoutingModule } from './accueil-entite-routing.module';

import { AccueilEntitePage } from './accueil-entite.page';
import { MenuComponent } from '../menu/menu.component';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccueilEntitePageRoutingModule,
    NgxPaginationModule
  ],
  declarations: [AccueilEntitePage,MenuComponent]
})
export class AccueilEntitePageModule {}
