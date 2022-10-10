import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeDesSallesPageRoutingModule } from './liste-des-salles-routing.module';

import { ListeDesSallesPage } from './liste-des-salles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeDesSallesPageRoutingModule
  ],
  declarations: [ListeDesSallesPage]
})
export class ListeDesSallesPageModule {}
