import { Component, OnInit } from '@angular/core';
import { Anuncio } from '../../models/anuncio.model';
import { AnuncioService } from '../../services/anuncio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  anuncios: Anuncio[];

  constructor(private anuncioService: AnuncioService) { }

  ngOnInit() {
    this.anuncioService.findAll().subscribe(resultado => {
      this.anuncios = resultado;
    });
  }

}
