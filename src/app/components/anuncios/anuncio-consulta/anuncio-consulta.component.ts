import { Component, OnInit } from '@angular/core';
import { TipoAnuncioService } from '../../../services/tipo-anuncio.service';
import { TipoAnuncio } from '../../../models/tipo-anuncio.model';
import { Observable } from 'rxjs';
import { AnuncioFiltro } from '../../../models/anuncio-filtro.model';
import { AnuncioService } from '../../../services/anuncio.service';
import { FormGroup, FormBuilder } from '@angular/forms';
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
  p: number = 1;

  constructor(
              private formBuilder: FormBuilder,
              private tipoAnuncioService: TipoAnuncioService,
              private anuncioService: AnuncioService) { }

  ngOnInit() {
    this.tipos = this.tipoAnuncioService.findAll();
    this.pesquisarTudo();
    this.createFormGroup();
  }

  public createFormGroup() {
    this.formulario = this.formBuilder.group({
      tipo: [null],
      nome: [null]
    });
  }

  public pesquisar(): void {
    this.anuncioFiltro = JSON.parse(JSON.stringify(this.formulario.value));
    this.anuncioService.findByFiltros(this.anuncioFiltro).subscribe(resultado => {
      this.anuncios = resultado;
    }); 
  }

  public pesquisarTudo(): void {
    this.anuncioService.findAll().subscribe(resultado => {
      this.anuncios = resultado;
    });
  }

  public apagar(id: number): void {
    if (confirm("Deseja excluir o anúncio de código: " + id)) {
      this.anuncioService.delete(id).subscribe(resultado => {
        alert("Anúncio removido com sucesso " + id);
        this.pesquisarTudo();
      });  
    }
  }

}