import { Component, OnInit } from '@angular/core';
import { TipoAnuncioService } from '../../../services/tipo-anuncio.service';
import { TipoAnuncio } from '../../../models/tipo-anuncio.model';
import { Observable } from 'rxjs';
import { AnuncioFiltro } from '../../../models/anuncio-filtro.model';
import { AnuncioService } from '../../../services/anuncio.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Anuncio } from '../../../models/anuncio.model';

@Component({
  selector: 'app-anuncio-consulta',
  templateUrl: './anuncio-consulta.component.html',
  styleUrls: ['./anuncio-consulta.component.css'],
  providers: [TipoAnuncioService]
})
export class AnuncioConsultaComponent implements OnInit {

  tipos: Observable<TipoAnuncio[]>;
  formulario: FormGroup;
  anuncioFiltro: AnuncioFiltro;
  anuncios: Anuncio[];

  constructor(
              private tipoAnuncioService: TipoAnuncioService,
              private formBuilder: FormBuilder,
              private anuncioService: AnuncioService) { }

  ngOnInit() {
    this.tipos = this.tipoAnuncioService.findAll();

    this.formulario = this.formBuilder.group({
      tipo: [null, Validators.required],
      nome: [null, Validators.required]
    });
  }

  public pesquisar(): void {
    this.anuncioFiltro = this.formulario.value;
    this.anuncioService.find(this.anuncioFiltro).subscribe(resultado => {
      this.anuncios = resultado;
    }); 
  }

}