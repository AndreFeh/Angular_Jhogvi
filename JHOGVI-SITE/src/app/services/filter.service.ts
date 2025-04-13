import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';
import { Evento } from '../models/evento';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
	filtrar(produtos: Produto[], filtros: any): Produto[] {
		return produtos.filter(produto => {
		  const correspondeNome = filtros.nome ? produto.titulo.toLowerCase().includes(filtros.nome.toLowerCase()) : true;
		  const correspondeCategoria = filtros.tipo ? produto.categoria === filtros.tipo : true;
		  const correspondeLocalidade = filtros.local ? produto.cor.toLowerCase().includes(filtros.local.toLowerCase()) : true;
		  return correspondeNome && correspondeCategoria && correspondeLocalidade;
		});
	}

	filtrarEventos(eventos: Evento[], filtros: { subcategoria?: string; localidade?: string; nome?: string }): Evento[] {
		return eventos.filter(evento => {
		  const correspondeCategoria = !filtros.subcategoria || evento.categoria.toLowerCase() === filtros.subcategoria.toLowerCase();
		  const correspondeLocalidade = !filtros.localidade || evento.localidade.toLowerCase() === filtros.localidade.toLowerCase();
		  const correspondeNome = !filtros.nome || evento.titulo.toLowerCase().includes(filtros.nome.toLowerCase());

		  return correspondeCategoria && correspondeLocalidade && correspondeNome;
		});
	  }


	limpar(elementos: Produto[]): Produto[] {
	return [...elementos];
	}

	limparEventos(eventos: Evento[]): Evento[] {
		return [...eventos]; // Apenas retorna todos os eventos novamente (sem filtro)
	  }

}
