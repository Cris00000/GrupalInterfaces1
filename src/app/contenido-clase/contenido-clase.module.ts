import { ComponentesModule } from './../componentes/componentes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContenidoClasePageRoutingModule } from './contenido-clase-routing.module';

import { ContenidoClasePage } from './contenido-clase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContenidoClasePageRoutingModule,
    ComponentesModule
  ],
  declarations: [ContenidoClasePage]
})
export class ContenidoClasePageModule {}
