import { Component } from '@angular/core';
import { FilterService } from '../../services/filter.service';
import { Produto } from '../../models/produto';
import { produtos } from '../../data/data';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
	elementos: Produto[] = [];
	elementosFiltrados :Produto[]= [];
	opcoesCategorias:string[]=[''];
	opcoesDetalhes: string[]=[''];

	constructor(private filterService: FilterService){}

	ngOnInit() {
		// Aqui você precisa extrair os produtos de dentro da estrutura de categorias
		const bones = produtos[0]?.categorias[0]?.boné ?? [];

		this.elementos = bones;
		this.elementosFiltrados = [...this.elementos];

		// Pegando categorias únicas
		this.opcoesCategorias = [...new Set(bones.map(p => p.categoria))];
		this.opcoesDetalhes = this.getDetalhesUnicos('Tipo');
	}

	getDetalhesUnicos(chave: string): string[] {
	const valores = this.elementos.flatMap(produto =>
			produto.detalhes
			.filter(detalhe => detalhe.toLowerCase().startsWith(`${chave.toLowerCase()}:`))
			.map(detalhe => detalhe.split(':')[1].trim())
		);
		return [...new Set(valores)];
	}


	aplicarFiltros(filtros: any) {
		this.elementosFiltrados = this.filterService.filtrar(this.elementos, filtros);
	}

	limparFiltros() {
		this.elementosFiltrados = this.filterService.limpar(this.elementos);
	}

}
