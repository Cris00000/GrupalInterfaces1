import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Contenido4Page } from './contenido4.page';

const routes: Routes = [
  {
    path: '',
    component: Contenido4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Contenido4PageRoutingModule {}
