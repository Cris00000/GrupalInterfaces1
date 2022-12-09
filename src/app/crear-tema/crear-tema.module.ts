import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearTemaPageRoutingModule } from './crear-tema-routing.module';

import { CrearTemaPage } from './crear-tema.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearTemaPageRoutingModule
  ],
  declarations: [CrearTemaPage]
})
export class CrearTemaPageModule {}
