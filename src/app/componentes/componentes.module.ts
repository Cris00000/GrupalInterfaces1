import { CardCodigoComponent } from './card-codigo/card-codigo.component';
import { TemaComponent } from './tema/tema.component';
import { ClaseComponent } from './clase/clase.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ClaseComponent,TemaComponent, CardCodigoComponent],
  imports: [
    CommonModule, IonicModule
  ], exports: [ClaseComponent,TemaComponent, CardCodigoComponent]
})
export class ComponentesModule { }
