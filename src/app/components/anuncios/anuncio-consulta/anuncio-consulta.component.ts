import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TipoAnuncioService } from '../../../services/tipo-anuncio.service';
import { TipoAnuncio } from '../../../models/tipo-anuncio.model';
import { Observable } from 'rxjs';
import { AnuncioFiltro } from '../../../models/anuncio-filtro.model';
import { AnuncioService } from '../../../services/anuncio.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Anuncio } from '../../../models/anuncio.model';
import { ConfirmaExclusaoComponent } from '../../../shared/confirma-exclusao/confirma-exclusao.component';

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
  anuncio: Anuncio;
  idAnuncio: number;
  nomeAnuncio: string;
  exibeExclusao: boolean = false;
  exibeVisualizar: boolean = false;
  p: number = 1;

  @ViewChild(ConfirmaExclusaoComponent) componenteExclusao: ConfirmaExclusaoComponent;

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

  public confirmaExclusao(anuncio: Anuncio): void {
    this.idAnuncio = anuncio.id;
    this.nomeAnuncio = anuncio.nome;
    this.exibeExclusao = true;
    //@viewChild istancia do componente exclusão.
    //console.log(this.componenteExclusao);
  }

  public excluirAnuncio(idExclusao: number): void {
    this.anuncioService.delete(idExclusao).subscribe(resultado => {
      this.pesquisarTudo(); //ou conforme abaixo, mas precisa receber o objeto
      //this.anuncios.splice(this.anuncios.indexOf(this.anuncioSelecionado), 1);
      alert("Anúncio removido com sucesso " + idExclusao);
    }); 
  }

  public cancelarAnuncio(mensagem: string): void {
    console.log(mensagem);
  }

  public visualizarAnuncio(anuncio: Anuncio): void {
    this.anuncio = anuncio;
    this.exibeVisualizar = true;
  }

}