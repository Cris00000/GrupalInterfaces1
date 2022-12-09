import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Contenido3PageRoutingModule } from './contenido3-routing.module';

import { Contenido3Page } from './contenido3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Contenido3PageRoutingModule
  ],
  declarations: [Contenido3Page]
})
export class Contenido3PageModule {}
