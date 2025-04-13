import { Component } from '@angular/core';
import { FilterService } from '../../services/filter.service';
import { Evento } from '../../models/evento';
import { eventos } from '../../data/data';
import { ValuesService } from '../../services/values.service';
@Component({
  selector: 'app-eventos',
  standalone: false,
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent {
	eventos: Evento[] = [];
	eventosFiltrados :Evento[]= [];
	opcoesCategorias:string[]=[''];
	opcoesLocalidades: string[]=[''];

	constructor(private filterService: FilterService, private valuesService :ValuesService, public formatBrl:ValuesService){}

	ngOnInit() {
		this.eventos = (eventos[0]?.categorias[0]?.evento ?? [])
		.filter((event: any) => event.entrada !== undefined);
			  this.eventosFiltrados = [...this.eventos];

		// this.opcoesCategorias = [...new Set(this.eventos.map(event => event.subcategoria))];
		this.opcoesCategorias = this.getDetalhesUnicos('Categoria');
		this.opcoesLocalidades = this.getDetalhesUnicos('Localidade');
	  }

	getDetalhesUnicos(chave: string): string[] {
	const valores = this.eventos.flatMap(event =>
			event.detalhes
			.filter(detalhe => detalhe.toLowerCase().startsWith(`${chave.toLowerCase()}:`))
			.map(detalhe => detalhe.split(':')[1].trim())
		);
		return [...new Set(valores)];
	}


	aplicarFiltros(filtros: any) {
		this.eventosFiltrados = this.filterService.filtrarEventos(this.eventos, filtros);
		if (this.eventosFiltrados.length === 0) {
			alert("Nenhum item encontrado");
		  } else {
			alert("Item(s) encontrado(s)");
		  }

	}

	limparFiltros() {
		this.eventosFiltrados = this.filterService.limparEventos(this.eventos);
	}
}
