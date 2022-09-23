import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeActeurPage } from './liste-acteur.page';

const routes: Routes = [
  {
    path: '',
    component: ListeActeurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeActeurPageRoutingModule {}
