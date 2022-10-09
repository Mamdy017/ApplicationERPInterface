import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifierActeurPage } from './modifier-acteur.page';

const routes: Routes = [
  {
    path: '',
    component: ModifierActeurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifierActeurPageRoutingModule {}
