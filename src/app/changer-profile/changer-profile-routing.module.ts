import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangerProfilePage } from './changer-profile.page';

const routes: Routes = [
  {
    path: '',
    component: ChangerProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangerProfilePageRoutingModule {}
