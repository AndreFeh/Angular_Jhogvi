import { Component, Input } from '@angular/core';
import { ValuesService } from '../../../services/values.service';
import { ProdutoCarrinho } from '../../../models/produto-carrinho';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-mini-card',
  standalone: false,
  templateUrl: './mini-card.component.html',
  styleUrl: './mini-card.component.css'
})
export class MiniCardComponent {
	@Input()imgProduct!:string;
	@Input()title!:string;
	@Input()description:string='';
	@Input()price!:number;

	@Input()id!:number ;

	constructor(public formatBrl:ValuesService, private values:ValuesService, private cartService:CartService){}

	  addToCart(): void {
		const evento: ProdutoCarrinho = {
		  id: this.id,
		  img: this.imgProduct,
		  titulo: this.title,
		  descricao: this.description,
		  preco: this.price,
		  qtd: 1
		};

		this.cartService.addToCart({
		  ...evento,
		  categoria: '',
		  cor: '',
		  imagens: [],
		  detalhes: []
		});

		alert(`${this.title} foi adicionado ao carrinho!`);
	  }

}
