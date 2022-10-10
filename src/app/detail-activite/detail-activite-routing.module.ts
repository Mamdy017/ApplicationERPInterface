import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailActivitePage } from './detail-activite.page';

const routes: Routes = [
  {
    path: '',
    component: DetailActivitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailActivitePageRoutingModule {}
