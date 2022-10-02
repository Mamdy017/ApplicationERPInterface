import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeTirageNonvalidePage } from './liste-tirage-nonvalide.page';

const routes: Routes = [
  {
    path: '',
    component: ListeTirageNonvalidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeTirageNonvalidePageRoutingModule {}
