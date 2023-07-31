import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Button2Page } from './button2.page';

const routes: Routes = [
  {
    path: '',
    component: Button2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Button2PageRoutingModule {}
