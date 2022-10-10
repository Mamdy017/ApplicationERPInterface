import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormulaireAjouterUtilisateurPage } from './formulaire-ajouter-utilisateur.page';

const routes: Routes = [
  {
    path: '',
    component: FormulaireAjouterUtilisateurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormulaireAjouterUtilisateurPageRoutingModule {}
