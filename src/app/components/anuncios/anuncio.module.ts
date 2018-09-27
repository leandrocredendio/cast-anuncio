import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnuncioRoutingModule } from './anuncio-routing.module';
import { AnuncioCadastroComponent } from './anuncio-cadastro/anuncio-cadastro.component';
import { AnuncioConsultaComponent } from './anuncio-consulta/anuncio-consulta.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { NgxMaskModule } from 'ngx-mask';
import { NgxPaginationModule } from 'ngx-pagination';
import { ConfirmaExclusaoModule } from '../../shared/confirma-exclusao/confirma-exclusao.module';
import { VisualizarAnuncioModule } from '../../shared/visualizar-anuncio/visualizar-anuncio.module';
import { TelefonePipe } from '../../utils/pipes/telefone.pipe';

@NgModule({
  imports: [
    CommonModule,
    AnuncioRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CurrencyMaskModule,
    NgxMaskModule.forRoot(),
    NgxPaginationModule,
    ConfirmaExclusaoModule,
    VisualizarAnuncioModule
  ],
  declarations: [
    AnuncioConsultaComponent,
    AnuncioCadastroComponent
  ]
})
export class AnuncioModule { }
