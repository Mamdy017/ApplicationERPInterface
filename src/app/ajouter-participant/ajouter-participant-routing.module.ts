import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterParticipantPage } from './ajouter-participant.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterParticipantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterParticipantPageRoutingModule {}
