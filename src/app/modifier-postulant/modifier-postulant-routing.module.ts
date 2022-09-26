import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifierPostulantPage } from './modifier-postulant.page';

const routes: Routes = [
  {
    path: '',
    component: ModifierPostulantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifierPostulantPageRoutingModule {}
