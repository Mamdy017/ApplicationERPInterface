import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilUserProfilPage } from './profil-user-profil.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilUserProfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilUserProfilPageRoutingModule {}
