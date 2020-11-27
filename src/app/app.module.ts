import { ProdutoService } from './produtos/produtos.services';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import {registerLocaleData } from '@angular/common';
import  localePt  from "@angular/common/locales/pt";
registerLocaleData(localePt);

import { AppComponent } from './app.component';

import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { APP_BASE_HREF } from '@angular/common';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';
import { HttpClientModule } from '@angular/common/http';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { NgBrazil } from 'ng-brazil';
import { TextMaskModule } from 'angular2-text-mask';
import { CustomFormsModule  } from 'ngx-custom-validators';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { AppRoutingModule } from './app.routes';



@NgModule({
  declarations: [
    AppComponent,
    
    SobreComponent,
    ContatoComponent,
    DataBindingComponent,
    ListaProdutoComponent,
    CadastroComponent,  

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    
    HttpClientModule ,
    NgBrazil,
    TextMaskModule, 
    ReactiveFormsModule,
    CustomFormsModule ,
    NavegacaoModule ,
    AppRoutingModule,


  ],
  providers: [
    ProdutoService,
    {provide: APP_BASE_HREF,useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
