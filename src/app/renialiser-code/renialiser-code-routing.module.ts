import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RenialiserCodePage } from './renialiser-code.page';

const routes: Routes = [
  {
    path: '',
    component: RenialiserCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RenialiserCodePageRoutingModule {}
