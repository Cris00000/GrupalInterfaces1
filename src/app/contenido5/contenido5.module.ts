import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Contenido5PageRoutingModule } from './contenido5-routing.module';

import { Contenido5Page } from './contenido5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Contenido5PageRoutingModule
  ],
  declarations: [Contenido5Page]
})
export class Contenido5PageModule {}
