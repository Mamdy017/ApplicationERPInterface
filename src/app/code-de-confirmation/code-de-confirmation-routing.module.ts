import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodeDeConfirmationPage } from './code-de-confirmation.page';

const routes: Routes = [
  {
    path: '',
    component: CodeDeConfirmationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodeDeConfirmationPageRoutingModule {}
