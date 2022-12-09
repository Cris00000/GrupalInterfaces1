import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearTemaPage } from './crear-tema.page';

const routes: Routes = [
  {
    path: '',
    component: CrearTemaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearTemaPageRoutingModule {}
