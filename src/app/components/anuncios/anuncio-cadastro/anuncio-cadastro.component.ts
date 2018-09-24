import { Component, OnInit } from '@angular/core';
import { TipoAnuncioService } from '../../../services/tipo-anuncio.service';
import { TipoAnuncio } from '../../../models/tipo-anuncio.model';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Anuncio } from '../../../models/anuncio.model';
import { AnuncioService } from '../../../services/anuncio.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Imagem } from '../../../models/imagem.model';
import { Router } from '@angular/router';
import { rootRoute } from '@angular/router/src/router_module';
import { Constants } from '../../../utils/constants';

@Component({
  selector: 'app-anuncio-cadastro',
  templateUrl: './anuncio-cadastro.component.html',
  styleUrls: ['./anuncio-cadastro.component.css']
})
export class AnuncioCadastroComponent implements OnInit {

  tipoAnuncio: Observable<TipoAnuncio[]>;
  formulario: FormGroup;
  anuncio: Anuncio;
  imagem: Imagem;

  constructor(
              private router: Router,
              private tipoAnuncioService: TipoAnuncioService,
              private anuncioService: AnuncioService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.tipoAnuncio = this.tipoAnuncioService.findAll();
    this.formulario = this.formBuilder.group({
      tipo: [null, Validators.required],
      nome: [null, Validators.required],
      descricao: [null, Validators.required],
      valor: [null, Validators.required],
      contato: [null, Validators.required]
    });
  }

  public campoValido(campo: string): boolean {
    let formControl = this.formulario.get(campo);
    if (campo.toLocaleUpperCase() == 'TIPO') {
      return formControl.value == 'null' && (formControl.touched || formControl.dirty);
    } else {
      return formControl.invalid && (formControl.touched || formControl.dirty);
    }
  }

  public onSelectFile(event: any): void {
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e: any) => {
        this.imagem = new Imagem(file.nome, reader.result);
      }
    }
  }

  //Inclusão de anúncios na API
  public salvar(): void {
    this.anuncio = JSON.parse(JSON.stringify(this.formulario.value));
    this.anuncio.imagem = this.imagem;
    if (this.formulario.status == 'VALID') {
      this.anuncioService.insert(this.anuncio).subscribe(resultado => {
        this.anuncio = JSON.parse(JSON.stringify(resultado));
        alert("Anúncio salvo com sucesso " + this.anuncio.nome);
        this.router.navigateByUrl(Constants.PATH_CONSULTA_ANUNCIO);
      });
    } else {
      alert("Não foi possível salvar o anúncio! Dados inválidos");
    }

  }

}
