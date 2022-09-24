import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageListeTiragePage } from './page-liste-tirage.page';

const routes: Routes = [
  {
    path: '',
    component: PageListeTiragePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageListeTiragePageRoutingModule {}
