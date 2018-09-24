import { Injectable } from '@angular/core';
import { Anuncio } from '../models/anuncio.model';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnuncioFiltro } from '../models/anuncio-filtro.model';

@Injectable({
  providedIn: 'root'
})
export class AnuncioService {

  private anuncioUrl: string;

  anuncio: Anuncio;

  constructor(private http: HttpClient) { 
    this.anuncioUrl = `${environment.apiBaseUrl}/anuncios`;
  }

  /* insert de anuncios método POST
  public insert(anuncio: Anuncio): Observable<HttpResponse<Anuncio>> {
    let body = JSON.stringify(anuncio);
    let httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Anuncio>(
      this.anuncioUrl,
      body,
      {
        headers : httpHeaders, 
        observe: 'response'
      });
  }
  */

  public insert(anuncio: Anuncio): Observable<Object> {
    return this.http.post(this.anuncioUrl, anuncio);
  }

  public find(anuncioFiltro : AnuncioFiltro): Observable<Anuncio[]>{
    console.log(anuncioFiltro);
    let parametros: string = "";
    if (anuncioFiltro.tipo != null) {
      parametros = "tipo=" + anuncioFiltro.tipo;
    } else {
      parametros = "";
    }
    if (anuncioFiltro.nome != null) {
      if (parametros != "") {
        parametros = parametros + "&";
      }
      parametros = parametros + "nome=" + anuncioFiltro.nome;
    }
    if (parametros != "") {
      parametros = "?" + parametros;
    }
    console.log(parametros);
    return this.http.get<Anuncio[]>(this.anuncioUrl + parametros);
  }

}
