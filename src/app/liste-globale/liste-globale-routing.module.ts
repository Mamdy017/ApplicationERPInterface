import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeGlobalePage } from './liste-globale.page';

const routes: Routes = [
  {
    path: '',
    component: ListeGlobalePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeGlobalePageRoutingModule {}
