import { Component, OnInit, Input, ViewChild, Output } from '@angular/core';
import { Anuncio } from '../../../models/anuncio.model';
import { VisualizarAnuncioComponent } from '../../../shared/visualizar-anuncio/visualizar-anuncio.component';

@Component({
  selector: 'app-home-card-anuncio',
  templateUrl: './home-card-anuncio.component.html',
  styleUrls: ['./home-card-anuncio.component.css']
})
export class HomeCardAnuncioComponent implements OnInit {

  @Input('anuncio') anuncio: Anuncio;
  @Input('index') index: number;
  exibeVisualizar: boolean = false;

  constructor() {
    
  }

  ngOnInit() {
  }

  public visualizarAnuncio(): void {
   this.exibeVisualizar = true;
  }

  public fechar(eventoFechar: boolean) {
    this.exibeVisualizar = eventoFechar;    
  }

}
