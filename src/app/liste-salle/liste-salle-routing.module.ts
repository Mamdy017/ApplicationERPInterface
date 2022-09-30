import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeSallePage } from './liste-salle.page';

const routes: Routes = [
  {
    path: '',
    component: ListeSallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeSallePageRoutingModule {}
