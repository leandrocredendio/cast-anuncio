import { Component, OnInit, Input, ViewChild, ComponentRef, Output, EventEmitter } from '@angular/core';
import { Anuncio } from '../../models/anuncio.model';

@Component({
  selector: 'app-visualizar-anuncio',
  templateUrl: './visualizar-anuncio.component.html',
  styleUrls: ['./visualizar-anuncio.component.css']
})
export class VisualizarAnuncioComponent implements OnInit {

  @Input("anuncio") anuncio: Anuncio;

  @Output() eventoFechar: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public fechar() {
    this.eventoFechar.emit(false);
  }

}
