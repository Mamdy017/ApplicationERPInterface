import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminAjouterActeurUserPage } from './admin-ajouter-acteur-user.page';

const routes: Routes = [
  {
    path: '',
    component: AdminAjouterActeurUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminAjouterActeurUserPageRoutingModule {}
