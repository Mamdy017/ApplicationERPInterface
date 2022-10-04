import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { AdminAccueilPageRoutingModule } from './admin-accueil-routing.module';
import { AdminAccueilPage } from './admin-accueil.page';
// import { SidebarPageModule } from '../sidebar/sidebar.module';
import { MenuComponent } from '../menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminAccueilPageRoutingModule,
    // SidebarPageModule
  ],
  declarations: [AdminAccueilPage,MenuComponent]
})
export class AdminAccueilPageModule {}
