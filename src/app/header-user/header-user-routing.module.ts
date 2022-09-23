import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderUserPage } from './header-user.page';

const routes: Routes = [
  {
    path: '',
    component: HeaderUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderUserPageRoutingModule {}
