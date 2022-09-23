import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderAdminPage } from './header-admin.page';

const routes: Routes = [
  {
    path: '',
    component: HeaderAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderAdminPageRoutingModule {}
