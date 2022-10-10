import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeDesSallesPage } from './liste-des-salles.page';

const routes: Routes = [
  {
    path: '',
    component: ListeDesSallesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeDesSallesPageRoutingModule {}
