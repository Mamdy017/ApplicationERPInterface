import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificationCodePage } from './modification-code.page';

const routes: Routes = [
  {
    path: '',
    component: ModificationCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificationCodePageRoutingModule {}
