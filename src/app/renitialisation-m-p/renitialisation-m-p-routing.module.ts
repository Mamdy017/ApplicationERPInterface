import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RenitialisationMPPage } from './renitialisation-m-p.page';

const routes: Routes = [
  {
    path: '',
    component: RenitialisationMPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RenitialisationMPPageRoutingModule {}
