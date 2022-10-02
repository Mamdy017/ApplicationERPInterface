import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilEntitePage } from './accueil-entite.page';

const routes: Routes = [
  {
    path: '',
    component: AccueilEntitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccueilEntitePageRoutingModule {}
