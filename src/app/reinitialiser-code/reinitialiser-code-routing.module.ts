import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReinitialiserCodePage } from './reinitialiser-code.page';

const routes: Routes = [
  {
    path: '',
    component: ReinitialiserCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReinitialiserCodePageRoutingModule {}
