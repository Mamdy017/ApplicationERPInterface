import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { IonicModule } from '@ionic/angular';

import { ListeActeurPageRoutingModule } from './liste-acteur-routing.module';

import { ListeActeurPage } from './liste-acteur.page';
import { MenuComponent } from '../menu/menu.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeActeurPageRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule

  ],
  declarations: [ListeActeurPage,MenuComponent]
})
export class ListeActeurPageModule {

}
