import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RenialiserCodePageRoutingModule } from './renialiser-code-routing.module';

import { RenialiserCodePage } from './renialiser-code.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RenialiserCodePageRoutingModule
  ],
  declarations: [RenialiserCodePage]
})
export class RenialiserCodePageModule {}
