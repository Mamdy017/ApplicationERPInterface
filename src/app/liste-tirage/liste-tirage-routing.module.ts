import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeTiragePage } from './liste-tirage.page';

const routes: Routes = [
  {
    path: '',
    component: ListeTiragePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeTiragePageRoutingModule {}
