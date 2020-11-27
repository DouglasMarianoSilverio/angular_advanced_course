import { NgModule } from "@angular/core";
import {CommonModule} from '@angular/common'
//import { RouterModule } from '@angular/router' // se nao declarar nao funciona a rota.

import { registerLocaleData } from "@angular/common";
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';
import { ProdutoDetalheComponent } from './componentes/produto-card-detalhe.component';

import { ProdutoRoutingModule } from './produto.route';
import { ProdutoCountComponent } from './componentes/produto-count.component';

@NgModule  ({
 declarations:[
     //declaração do componente utilizado dentro do proprio modulo, nao sendo necessario exportar.
     ProdutoDashboardComponent,
     ProdutoDetalheComponent,
     ProdutoCountComponent
 ],
 imports: [
     CommonModule,
     ProdutoRoutingModule
 ],
 exports:[

 ]
}) 

export class ProdutoModule{}