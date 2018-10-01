import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisualizarAnuncioComponent } from './visualizar-anuncio.component';
import { TelefoneModule } from '../../utils/pipes/telefone/telefone.module';

@NgModule({
  imports: [
    CommonModule,
    TelefoneModule
  ],
  declarations: [
    VisualizarAnuncioComponent
  ],
  exports: [
    VisualizarAnuncioComponent
  ]
})
export class VisualizarAnuncioModule { }
