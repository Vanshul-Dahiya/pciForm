import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Button2PageRoutingModule } from './button2-routing.module';

import { Button2Page } from './button2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Button2PageRoutingModule
  ],
  declarations: [Button2Page]
})
export class Button2PageModule {}
