import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterPostulantPage } from './ajouter-postulant.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterPostulantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterPostulantPageRoutingModule {}
