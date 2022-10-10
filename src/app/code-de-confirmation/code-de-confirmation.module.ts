import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodeDeConfirmationPageRoutingModule } from './code-de-confirmation-routing.module';

import { CodeDeConfirmationPage } from './code-de-confirmation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodeDeConfirmationPageRoutingModule
  ],
  declarations: [CodeDeConfirmationPage]
})
export class CodeDeConfirmationPageModule {}
