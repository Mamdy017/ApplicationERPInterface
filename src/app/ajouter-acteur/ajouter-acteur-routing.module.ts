import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterActeurPage } from './ajouter-acteur.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterActeurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterActeurPageRoutingModule {}
