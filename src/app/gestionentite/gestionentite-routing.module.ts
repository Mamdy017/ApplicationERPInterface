import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionentitePage } from './gestionentite.page';

const routes: Routes = [
  {
    path: '',
    component: GestionentitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionentitePageRoutingModule {}
