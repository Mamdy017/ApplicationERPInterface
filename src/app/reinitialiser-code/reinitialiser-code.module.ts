import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReinitialiserCodePageRoutingModule } from './reinitialiser-code-routing.module';

import { ReinitialiserCodePage } from './reinitialiser-code.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReinitialiserCodePageRoutingModule
  ],
  declarations: [ReinitialiserCodePage]
})
export class ReinitialiserCodePageModule {}
