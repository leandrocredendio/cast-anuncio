import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Anuncio } from '../../../models/anuncio.model';
import { VisualizarAnuncioComponent } from '../../../shared/visualizar-anuncio/visualizar-anuncio.component';

@Component({
  selector: 'app-home-card-anuncio',
  templateUrl: './home-card-anuncio.component.html',
  styleUrls: ['./home-card-anuncio.component.css']
})
export class HomeCardAnuncioComponent implements OnInit {

  @Input("anuncio") anuncio: Anuncio;
  exibeVisualizar: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public visualizarAnuncio(anuncio: Anuncio): void {
    console.log("1 -> " + anuncio.id + " - " + this.anuncio.id);
    this.anuncio = anuncio;
    console.log("2 -> " + anuncio.id + " - " + this.anuncio.id);
    this.exibeVisualizar = true;
  }

}
