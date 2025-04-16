import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ValuesService } from '../../services/values.service';
import { ProdutoCarrinho } from '../../models/produto-carrinho';
import { Evento } from '../../models/evento';
import { eventos } from '../../data/data';
import { ActivatedRoute } from '@angular/router';
import { EventoCarrinho } from '../../models/evento-carrinho';
import { ItemCarrinho } from '../../models/item-carrinho';

@Component({
  selector: 'app-event',
  standalone: false,
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {
	event?: Evento;
	private id!: number;

	constructor(
	  private route: ActivatedRoute,
	  private cartService: CartService,
	  public formatBrl: ValuesService
	) {}

	ngOnInit(): void {
	  this.route.paramMap.subscribe(params => {
		const idParam = params.get('id');
		if (idParam) {
		  this.id = +idParam;
		  this.loadEventById(this.id);
		} else {
		  console.error("ID não encontrado na rota.");
		}
	  });
	}

	private loadEventById(id: number): void {
	  const foundEvent = eventos.find(e => e.id === id);
	  if (foundEvent) {
		this.event = foundEvent;
	  } else {
		console.error("Evento não encontrado!");
	  }
	}

	addToCart(): void {
	  if (!this.event) return;

	  const item: ItemCarrinho = {
		id: this.event.id,
		titulo: this.event.titulo,
		preco: this.event.entrada,
		qtd: 1,
		descricao: this.event.descricao,
		detalhes: this.event.detalhes,
		imagens: this.event.imagens,
		tipo: 'evento'
	  };

	  this.cartService.addToCart(item);
	}
  }
