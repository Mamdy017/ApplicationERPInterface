import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImporterParticipantPage } from './importer-participant.page';

const routes: Routes = [
  {
    path: '',
    component: ImporterParticipantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImporterParticipantPageRoutingModule {}
