import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeUtilisateurPageRoutingModule } from './liste-utilisateur-routing.module';

import { ListeUtilisateurPage } from './liste-utilisateur.page';
import { MenuComponent } from '../menu/menu.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeUtilisateurPageRoutingModule, 
    NgxPaginationModule
  ],
  declarations: [ListeUtilisateurPage,MenuComponent]
})
export class ListeUtilisateurPageModule {}
