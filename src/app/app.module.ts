import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//Configurando locale pt-BR
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePt, 'pt-BR');

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeCardAnuncioComponent } from './components/home/home-card-anuncio/home-card-anuncio.component';
import { VisualizarAnuncioModule } from './shared/visualizar-anuncio/visualizar-anuncio.module';
import { ShortDescriptionModule } from './utils/pipes/shortDescription/short-description.module';
import { TelefoneModule } from './utils/pipes/telefone/telefone.module';
import { ErrorHttpInterceptor } from './utils/interceptors/error-http-interceptor';
//import ErrorHttpInterceptor from './utils/interceptors/error-http-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotfoundComponent,
    HomeCardAnuncioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TelefoneModule,
    ShortDescriptionModule,
    VisualizarAnuncioModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHttpInterceptor,
      multi: true
    },
    { 
      provide: LOCALE_ID,
      useValue: 'pt-BR' 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
