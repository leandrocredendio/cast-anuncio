import { Component, OnInit, Input } from '@angular/core';
import { AnuncioService } from '../../services/anuncio.service';
import { Subject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Anuncio } from '../../models/anuncio.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private subjectPesquisa: Subject<string> = new Subject<string>();
  public anuncios: Observable<Anuncio[]>;

  @Input('anuncio') anuncio: Anuncio;
  exibeVisualizar: boolean = false;

  constructor(private anuncioService: AnuncioService) { }

  ngOnInit() {
    this.subjectPesquisa.pipe(//1 - Pipe concatena operadores a serem executados
      debounceTime(2000), //2 - Pausa a execução e aguarda 3 segundos
      distinctUntilChanged(), //3 - Faz pesquisas distintas
      map((texto: string) => { //4 - Fazer validações no texto digitado no input
        if (texto.trim() === '') {
          return new Observable<Anuncio[]>();
        }
        //5 - Executa a pesquisa com o termos digitado no input
        return this.anuncioService.findByDescricao(texto);
      })).subscribe(resultado => {
        console.log(resultado);
        this.anuncios = resultado;
      })
  }

  public pesquisa(termoBusca: string): void {
    this.subjectPesquisa.next(termoBusca);
  }

  public visualizarAnuncio(anuncio: Anuncio): void {
    this.anuncio = anuncio;
    this.subjectPesquisa.next('');
    this.exibeVisualizar = true;
   }
 
   public fechar(eventoFechar: boolean) {
     this.exibeVisualizar = eventoFechar;    
   }

}
