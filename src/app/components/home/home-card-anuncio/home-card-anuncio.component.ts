import { Component, OnInit, Input } from '@angular/core';
import { Anuncio } from '../../../models/anuncio.model';

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
    this.anuncio = anuncio;
    this.exibeVisualizar = true;
  }

}
