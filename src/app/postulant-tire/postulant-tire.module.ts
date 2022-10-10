import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostulantTirePageRoutingModule } from './postulant-tire-routing.module';

import { PostulantTirePage } from './postulant-tire.page';
import { MenuComponent } from '../menu/menu.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostulantTirePageRoutingModule,
    NgxPaginationModule, 
    Ng2SearchPipeModule
  ],
  declarations: [PostulantTirePage,MenuComponent]
})
export class PostulantTirePageModule {}
