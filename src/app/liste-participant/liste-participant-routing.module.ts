import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeParticipantPage } from './liste-participant.page';

const routes: Routes = [
  {
    path: '',
    component: ListeParticipantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeParticipantPageRoutingModule {}
