import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AnuncioService } from '../../services/anuncio.service';

@Component({
  selector: 'app-confirma-exclusao',
  templateUrl: './confirma-exclusao.component.html',
  styleUrls: ['./confirma-exclusao.component.css']
})
export class ConfirmaExclusaoComponent implements OnInit {

  @Input("idExclusao") idExclusao: number;
  @Input("textoModal") textoModal: string;

  @Output() eventoModalExcluir: EventEmitter<number> = new EventEmitter();

  constructor(private anuncioService: AnuncioService) { }

  ngOnInit() {
  }

  public excluir(): void {
    this.eventoModalExcluir.emit(this.idExclusao);
  }

}
