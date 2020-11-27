import { Component, EventEmitter, Input, Output  } from "@angular/core";
import { Produto } from '../models/produto';

@Component({
    selector: 'produto-card-detalhe',
    templateUrl: './produto-card-detalhe.component.html'    
})
export class ProdutoDetalheComponent {
    constructor() { }    

    @Input()
    produto: Produto;

    @Output()
    status: EventEmitter<Produto> = new EventEmitter();

    emitirEvento(){        
        this.status.emit(this.produto);
    }
}
