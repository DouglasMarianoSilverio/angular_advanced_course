import { ProdutoService } from './../produtos.services';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',

})
export class ListaProdutoComponent implements OnInit {

  constructor(private produtoService: ProdutoService) { }
  public produtos: Produto[];

  ngOnInit(){
     this.produtoService.obterProdutos()
     .subscribe(
       produtos => {
         this.produtos = produtos;
         //never do it on prod.
         console.log(produtos);
       },
       error => console.log(error)
     );
  }

}
