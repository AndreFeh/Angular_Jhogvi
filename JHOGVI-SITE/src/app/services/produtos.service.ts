import { Injectable } from '@angular/core';
import { produtos } from '../data/data';
import { Observable, of } from 'rxjs';

export interface Produto {
  id: number;
  categoria: string;
  cor: string;
  imagens: string[];
  titulo: string;
  descricao: string;
  detalhes: string[];
  preco: number;
  qtd:number;
}

interface Categoria <T=Produto>{
  id: number;
  [nome: string]: T[] | number | undefined;
}

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private produtosData = produtos;

  getProdutosPorCategoria(nomeCategoria: string): Observable<Produto[]> {
	const categorias = this.produtosData[0]?.categorias ?? [];

	const produtosFiltrados: Produto[] = categorias.flatMap((cat: any) => {
	  const produtosCategoria = cat[nomeCategoria];

	  if (Array.isArray(produtosCategoria)) {
		return produtosCategoria.filter(
		  (prod: any) => 'cor' in prod && 'preco' in prod
		);
	  }
	  return [];
	});

	return of(produtosFiltrados);
  }

}
