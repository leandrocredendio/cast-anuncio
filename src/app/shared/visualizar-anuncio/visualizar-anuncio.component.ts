import { Component, OnInit, Input, ViewChild, ComponentRef } from '@angular/core';
import { Anuncio } from '../../models/anuncio.model';

@Component({
  selector: 'app-visualizar-anuncio',
  templateUrl: './visualizar-anuncio.component.html',
  styleUrls: ['./visualizar-anuncio.component.css']
})
export class VisualizarAnuncioComponent implements OnInit {

  @Input("anuncio") anuncio: Anuncio;

  constructor() { }

  ngOnInit() {
    console.log(this.anuncio)
  }

  public fechar() {
    console.log("Botão fechar antes: " + this.anuncio.id);
  }

}
