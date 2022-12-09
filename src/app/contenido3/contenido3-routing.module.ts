import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Contenido3Page } from './contenido3.page';

const routes: Routes = [
  {
    path: '',
    component: Contenido3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Contenido3PageRoutingModule {}
