import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormulaireAjouterUtilisateurPageRoutingModule } from './formulaire-ajouter-utilisateur-routing.module';

import { FormulaireAjouterUtilisateurPage } from './formulaire-ajouter-utilisateur.page';
import { MenuComponent } from '../menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormulaireAjouterUtilisateurPageRoutingModule
  ],
  declarations: [FormulaireAjouterUtilisateurPage,MenuComponent]
})
export class FormulaireAjouterUtilisateurPageModule {}
