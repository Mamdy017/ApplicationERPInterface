import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterActivatePage } from './ajouter-activate.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterActivatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterActivatePageRoutingModule {}
