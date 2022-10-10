import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeUtilisateurPageRoutingModule } from './liste-utilisateur-routing.module';

import { ListeUtilisateurPage } from './liste-utilisateur.page';
import { MenuComponent } from '../menu/menu.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeUtilisateurPageRoutingModule, 
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  declarations: [ListeUtilisateurPage,MenuComponent]
})
export class ListeUtilisateurPageModule {}
