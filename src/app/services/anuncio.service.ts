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

  public update(anuncio: Anuncio): Observable<Object> {
    return this.http.put<Anuncio>(this.anuncioUrl + `/${anuncio.id}`, anuncio);
  }

  public findByFiltros(anuncioFiltro : AnuncioFiltro): Observable<Anuncio[]>{
    /*let parametros: string = "";
    if (anuncioFiltro.tipo != null) {
      parametros = "tipo=" + anuncioFiltro.tipo;
    } else {
      parametros = "";
    }
    if (anuncioFiltro.nome != null) {
      if (parametros != "") {
        parametros = parametros + "&";
      }
      parametros = parametros + "nome_like=" + anuncioFiltro.nome;
    }
    if (parametros != "") {
      parametros = "?" + parametros;
    }
    console.log(parametros);
    return this.http.get<Anuncio[]>(this.anuncioUrl + parametros);*/
    
    let filtros = '?';
    if (anuncioFiltro.tipo != null && anuncioFiltro.tipo != "null") {
      filtros = filtros + 'tipo=' + anuncioFiltro.tipo + '&';
    } 
    if (anuncioFiltro.nome != null) {
      filtros = filtros + 'nome_like=' + anuncioFiltro.nome;
    }
    return this.http.get<Anuncio[]>(this.anuncioUrl + filtros);
  }

  public findAll(): Observable<Anuncio[]> {
    return this.http.get<Anuncio[]>(this.anuncioUrl);
  }

  public findById(id: number): Observable<Anuncio> {
    return this.http.get<Anuncio>(this.anuncioUrl + "?id=" + id);
  }

}
