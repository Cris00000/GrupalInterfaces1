import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Contenido4PageRoutingModule } from './contenido4-routing.module';

import { Contenido4Page } from './contenido4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Contenido4PageRoutingModule
  ],
  declarations: [Contenido4Page]
})
export class Contenido4PageModule {}
