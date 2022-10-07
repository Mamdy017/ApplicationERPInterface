import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsActivitePage } from './details-activite.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsActivitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsActivitePageRoutingModule {}
