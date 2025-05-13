// src/app/data/data.ts
export interface Produto {
	id: number;
	categoria: string;
	cor: string[];
	imagens: string[];
	titulo: string;
	descricao: string[];
	detalhes: string[];
	preco: number;
}
export interface Evento {
	id: number;
	categoria: string;
	subcategoria: string;
	imagens: string[];
	titulo: string;
	descricao: string;
	detalhes: string[];
	localidade: string;
	endereco:string;
	local:string;
	data: string;
	entrada: number;
}

export const produtos = [{
	id: 1001,
	categoria: 'Bone',
	titulo: 'Jhogvi Negócios e Oportunidades',
	descricao: ['Prezados Senhores,(a)','É com grande entusiasmo que apresentamos este produto que vem com uma oportunidades de parceria entre  nós.','Apos adquirir união de nossas forças pode gerar resultados significativos e criar valor para ambas as partes.'],
	detalhes: ['Tecnologia: Chip Criptografado'],
	cor: ['Preto', 'Branco'],
	imagens: [
		'assets/3d/mockup1.png', 'assets/3d/mockup2.png', 'assets/3d/mockup3.png',
		'assets/3d/mockup4.png', 'assets/3d/mockup5.png', 'assets/3d/mockup6.png',
		'assets/3d/mockup7.png', 'assets/3d/mockup8.png', 'assets/3d/mockup9.png', 'assets/3d/mockup10.png'
	],
	preco: 59.90
	},
	{
	id: 1002,
	categoria: 'Bone',
	titulo: 'Jhogvi Negócios e Oportunidades',
	descricao: ['Prezados Senhores,(a)','É com grande entusiasmo que apresentamos este produto que vem com uma oportunidades de parceria entre  nós.','Apos adquirir união de nossas forças pode gerar resultados significativos e criar valor para ambas as partes.'],
	detalhes: ['Tecnologia: Aba Reta'],
	cor: ['Branco'],
	imagens: [
		'assets/3d/mockup1.png', 'assets/3d/mockup2.png', 'assets/3d/mockup3.png',
		'assets/3d/mockup4.png', 'assets/3d/mockup5.png', 'assets/3d/mockup6.png',
		'assets/3d/mockup7.png', 'assets/3d/mockup8.png', 'assets/3d/mockup9.png', 'assets/3d/mockup10.png'
	],
	preco: 64.90
	}
];

export const eventos=[{
	id: 2001,
	categoria: 'Evento',
	subcategoria: 'Música',
	imagens: ['assets/img/eventos/img-evento.png'],
	titulo: 'Festival de Inverno de Curitiba',
	descricao: 'Evento musical ao ar livre com atrações nacionais em Curitiba.',
	detalhes: [],
	localidade: 'Curitiba',
	endereco: 'Rua das Carmelias, 456',
	local:'Convenção das Roseiras',
	data:'26-09-2026',
	entrada: 0.0
	},
	{
	id: 2002,
	categoria: 'Evento',
	subcategoria: 'Geek',
	imagens: ['assets/img/eventos/img-evento.png'],
	titulo: 'Anime Day Maringá',
	descricao: 'Evento com concursos de cosplay, games e palestras geek.',
	detalhes: [],
	localidade: 'Maringá',
	endereco: 'Rua das Carmelias, 456',
	local:'Convenção das Roseiras',
	data:'26-09-2026',
	entrada: 25.00
	},
	{
	id: 2003,
	categoria: 'Evento',
	subcategoria: 'Música',
	imagens: ['assets/img/eventos/img-evento.png'],
	titulo: 'Jazz no Lago Ponta Grossa',
	descricao: 'Festival de jazz à beira do lago com artistas convidados.',
	detalhes: [],
	localidade: 'Ponta Grossa',
	endereco: 'Rua das Carmelias, 456',
	local:'Convenção das Roseiras',
	data:'26-09-2026',
	entrada: 20.00
	}]
