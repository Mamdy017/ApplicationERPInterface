import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageListeSuitePage } from './page-liste-suite.page';

const routes: Routes = [
  {
    path: '',
    component: PageListeSuitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageListeSuitePageRoutingModule {}
