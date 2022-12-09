import { TemaComponent } from './tema/tema.component';
import { ClaseComponent } from './clase/clase.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ClaseComponent,TemaComponent],
  imports: [
    CommonModule, IonicModule
  ], exports: [ClaseComponent,TemaComponent]
})
export class ComponentesModule { }
