import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterTachePage } from './ajouter-tache.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterTachePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterTachePageRoutingModule {}
