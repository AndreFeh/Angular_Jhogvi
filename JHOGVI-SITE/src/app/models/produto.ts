export interface Produto {
	id: number;
	categoria: string;
	cor: string;
	imagens: string[];
	titulo: string;
	descricao: string;
	detalhes: string[];
	preco: number;
	qtd?: number; // opcional, só aparece no carrinho
}
