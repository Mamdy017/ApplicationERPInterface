import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificationCodePageRoutingModule } from './modification-code-routing.module';

import { ModificationCodePage } from './modification-code.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificationCodePageRoutingModule
  ],
  declarations: [ModificationCodePage]
})
export class ModificationCodePageModule {}
