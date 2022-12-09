import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Contenido5Page } from './contenido5.page';

const routes: Routes = [
  {
    path: '',
    component: Contenido5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Contenido5PageRoutingModule {}
