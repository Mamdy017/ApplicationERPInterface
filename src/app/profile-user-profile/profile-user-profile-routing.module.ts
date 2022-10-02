import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileUserProfilePage } from './profile-user-profile.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileUserProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileUserProfilePageRoutingModule {}
