// src/app/data/data.ts
export interface Produto {
	id: number;
	categoria: string;
	cor: string;
	imagens: string[];
	titulo: string;
	descricao: string;
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
	categorias: [{
		id: 1,
	  	boné: [
			{
			id: 1,
			categoria: 'Boné',
			cor: 'Preto',
			imagens: [
				'assets/3d/mockup1.png', 'assets/3d/mockup2.png', 'assets/3d/mockup3.png',
				'assets/3d/mockup4.png', 'assets/3d/mockup5.png', 'assets/3d/mockup6.png',
				'assets/3d/mockup7.png', 'assets/3d/mockup8.png', 'assets/3d/mockup9.png', 'assets/3d/mockup10.png'
			],
			titulo: 'Boné Preto Classic Fit',
			descricao: 'Boné preto básico com caimento clássico e discreto. Essencial em qualquer guarda-roupa.',
			detalhes: ['Tipo: Aba Curva', 'Cor: Preto', 'Material: Algodão', 'Fecho: Snapback', 'Tamanho: Único'],
			preco: 59.90
			},
			{
			id: 2,
			categoria: 'Boné',
			cor: 'Branco',
			imagens: [
				'assets/3d/mockup1.png', 'assets/3d/mockup2.png', 'assets/3d/mockup3.png',
				'assets/3d/mockup4.png', 'assets/3d/mockup5.png', 'assets/3d/mockup6.png',
				'assets/3d/mockup7.png', 'assets/3d/mockup8.png', 'assets/3d/mockup9.png', 'assets/3d/mockup10.png'
			],
			titulo: 'Boné Branco Clean Style',
			descricao: 'Com seu visual minimalista e moderno, o Boné Branco Clean é ideal para compor um visual leve e sofisticado.',
			detalhes: ['Tipo: Aba Reta', 'Cor: Branco', 'Material: Algodão', 'Tamanho: Ajustável', 'Fecho: Snapback'],
			preco: 64.90
			},
			{
			id: 3,
			categoria: 'Boné',
			cor: 'Bege',
			imagens: [
				'assets/3d/mockup1.png', 'assets/3d/mockup2.png', 'assets/3d/mockup3.png',
				'assets/3d/mockup4.png', 'assets/3d/mockup5.png', 'assets/3d/mockup6.png',
				'assets/3d/mockup7.png', 'assets/3d/mockup8.png', 'assets/3d/mockup9.png', 'assets/3d/mockup10.png'
			],
			titulo: 'Boné Casual Bege Claro',
			descricao: 'Este boné bege é versátil e confortável, ótimo para quem busca discrição com estilo em qualquer ocasião.',
			detalhes: ['Tipo: Trucker', 'Cor: Bege', 'Material: Algodão e Poliéster', 'Tamanho: Único', 'Fecho: Plástico'],
			preco: 72.00
			},
			{
			id: 4,
			categoria: 'Boné',
			cor: 'Laranja',
			imagens: [
				'assets/3d/mockup1.png', 'assets/3d/mockup2.png', 'assets/3d/mockup3.png',
				'assets/3d/mockup4.png', 'assets/3d/mockup5.png', 'assets/3d/mockup6.png',
				'assets/3d/mockup7.png', 'assets/3d/mockup8.png', 'assets/3d/mockup9.png', 'assets/3d/mockup10.png'
			],
			titulo: 'Boné Laranja Impacto',
			descricao: 'Destaque-se com o Boné Laranja Impacto — perfeito para quem gosta de ousar com cor e presença.',
			detalhes: ['Tipo: Aba Curva', 'Cor: Laranja Vibrante', 'Material: Poliéster', 'Fecho: Velcro', 'Tamanho: Ajustável'],
			preco: 78.50
			},
			{
			id: 5,
			categoria: 'Boné',
			cor: 'Rosa',
			imagens: [
				'assets/3d/mockup1.png', 'assets/3d/mockup2.png', 'assets/3d/mockup3.png',
				'assets/3d/mockup4.png', 'assets/3d/mockup5.png', 'assets/3d/mockup6.png',
				'assets/3d/mockup7.png', 'assets/3d/mockup8.png', 'assets/3d/mockup9.png', 'assets/3d/mockup10.png'
			],
			titulo: 'Boné Rosa Pastel Street',
			descricao: 'Boné rosa pastel com vibe street fashion, ótimo para looks modernos e confortáveis.',
			detalhes: ['Tipo: Snapback', 'Cor: Rosa Pastel', 'Material: Algodão Orgânico', 'Tamanho: Ajustável'],
			preco: 84.99
			},
			{
			id: 6,
			categoria: 'Boné',
			cor: 'Amarelo',
			imagens: [
				'assets/3d/mockup1.png', 'assets/3d/mockup2.png', 'assets/3d/mockup3.png',
				'assets/3d/mockup4.png', 'assets/3d/mockup5.png', 'assets/3d/mockup6.png',
				'assets/3d/mockup7.png', 'assets/3d/mockup8.png', 'assets/3d/mockup9.png', 'assets/3d/mockup10.png'
			],
			titulo: 'Boné Amarelo Solar',
			descricao: 'Ilumine seus dias com o Boné Amarelo Solar. Perfeito para dias ensolarados e looks descontraídos.',
			detalhes: ['Tipo: Aba Curva', 'Cor: Amarelo', 'Material: Algodão', 'Fecho: Velcro'],
			preco: 68.00
			},
			{
			id: 7,
			categoria: 'Boné',
			cor: 'Marrom',
			imagens: [
				'assets/3d/mockup1.png', 'assets/3d/mockup2.png', 'assets/3d/mockup3.png',
				'assets/3d/mockup4.png', 'assets/3d/mockup5.png', 'assets/3d/mockup6.png',
				'assets/3d/mockup7.png', 'assets/3d/mockup8.png', 'assets/3d/mockup9.png', 'assets/3d/mockup10.png'
			],
			titulo: 'Boné Marrom Rústico',
			descricao: 'Para os amantes do estilo rústico e clássico, este boné marrom entrega autenticidade e conforto.',
			detalhes: ['Tipo: Trucker', 'Cor: Marrom', 'Material: Lona e Tela', 'Fecho: Ajustável'],
			preco: 74.90
			},
			{
			id: 8,
			categoria: 'Boné',
			cor: 'Bordô',
			imagens: [
				'assets/3d/mockup1.png', 'assets/3d/mockup2.png', 'assets/3d/mockup3.png',
				'assets/3d/mockup4.png', 'assets/3d/mockup5.png', 'assets/3d/mockup6.png',
				'assets/3d/mockup7.png', 'assets/3d/mockup8.png', 'assets/3d/mockup9.png', 'assets/3d/mockup10.png'
			],
			titulo: 'Boné Bordô Elegância Casual',
			descricao: 'Com uma tonalidade sofisticada, o Boné Bordô traz um toque de elegância ao seu visual.',
			detalhes: ['Tipo: Aba Reta', 'Cor: Bordô', 'Material: Sarja Premium', 'Fecho: Snapback'],
			preco: 86.99
			},
			{
			id: 9,
			categoria: 'Boné',
			cor: 'Camuflado',
			imagens: [
				'assets/3d/mockup1.png', 'assets/3d/mockup2.png', 'assets/3d/mockup3.png',
				'assets/3d/mockup4.png', 'assets/3d/mockup5.png', 'assets/3d/mockup6.png',
				'assets/3d/mockup7.png', 'assets/3d/mockup8.png', 'assets/3d/mockup9.png', 'assets/3d/mockup10.png'
			],
			titulo: 'Boné Camuflado Militar Style',
			descricao: 'Com visual marcante, o boné camuflado é tendência entre os apaixonados por moda urbana e aventura.',
			detalhes: ['Tipo: Trucker', 'Cor: Camuflado', 'Material: Poliéster e Algodão', 'Tamanho: Ajustável'],
			preco:  91.00
			},
			{
			id: 10,
			categoria: 'Boné',
			cor: 'Grafite',
			imagens: [
				'assets/3d/mockup1.png', 'assets/3d/mockup2.png', 'assets/3d/mockup3.png',
				'assets/3d/mockup4.png', 'assets/3d/mockup5.png', 'assets/3d/mockup6.png',
				'assets/3d/mockup7.png', 'assets/3d/mockup8.png', 'assets/3d/mockup9.png', 'assets/3d/mockup10.png'
			],
			titulo: 'Boné Grafite TechFit',
			descricao: 'Estilo urbano com toque futurista. O Boné Grafite TechFit traz um design limpo e versátil para o dia a dia.',
			detalhes: ['Tipo: Aba Curva', 'Cor: Grafite Escuro', 'Material: Spandex e Algodão', 'Fecho: Velcro'],
			preco: 88.00
		}]
	}]
}];

export const eventos=[{
	categorias: [{

		id: 2,
		evento: [
			{
			id: 11,
			categoria: 'Evento',
			subcategoria: 'Música',
			imagens: ['assets/eventos/fundo_tech.png'],
			titulo: 'Festival de Inverno de Curitiba',
			descricao: 'Evento musical ao ar livre com atrações nacionais em Curitiba.',
			detalhes: ['Tipo: Show', 'Categoria: Música', 'Localidade: Curitiba'],
			localidade: 'Curitiba',
			endereco: 'Rua das Carmelias, 456',
			local:'Convenção das Roseiras',
			data:'26-09-2026',
			entrada: 0.0
			},
			{
			id: 12,
			categoria: 'Evento',
			subcategoria: 'Geek',
			imagens: ['assets/eventos/fundo_tech.png'],
			titulo: 'Expo Nerd Londrina',
			descricao: 'Feira de cultura geek com animes, HQs e cosplay em Londrina.',
			detalhes: ['Tipo: Feira', 'Categoria: Geek', 'Localidade: Londrina'],
			localidade: 'Londrina',
			endereco: 'Rua das Carmelias, 456',
			local:'Convenção das Roseiras',
			data:'26-09-2026',
			entrada:  30.00
			},
			{
			id: 13,
			categoria: 'Evento',
			subcategoria: 'Música',
			imagens: ['assets/eventos/fundo_tech.png'],
			titulo: 'Rock Cascavel',
			descricao: 'Festival de rock com bandas regionais e food trucks.',
			detalhes: ['Tipo: Show', 'Categoria: Música', 'Localidade: Cascavel'],
			localidade: 'Cascavel',
			endereco: 'Rua das Carmelias, 456',
			local:'Convenção das Roseiras',
			data:'26-09-2026',
			entrada: 40.00
			},
			{
			id: 14,
			categoria: 'Evento',
			subcategoria: 'Geek',
			imagens: ['assets/eventos/fundo_tech.png'],
			titulo: 'Anime Day Maringá',
			descricao: 'Evento com concursos de cosplay, games e palestras geek.',
			detalhes: ['Tipo: Encontro', 'Categoria: Geek', 'Localidade: Maringá'],
			localidade: 'Localidade: Maringá',
			endereco: 'Rua das Carmelias, 456',
			local:'Convenção das Roseiras',
			data:'26-09-2026',
			entrada: 25.00
			},
			{
			id: 15,
			categoria: 'Evento',
			subcategoria: 'Música',
			imagens: ['assets/eventos/fundo_tech.png'],
			titulo: 'Jazz no Lago Ponta Grossa',
			descricao: 'Festival de jazz à beira do lago com artistas convidados.',
			detalhes: ['Tipo: Show', 'Categoria: Música', 'Localidade: Ponta Grossa'],
			localidade: 'Ponta Grossa',
			endereco: 'Rua das Carmelias, 456',
			local:'Convenção das Roseiras',
			data:'26-09-2026',
			entrada: 20.00
			},
			{
			id: 16,
			categoria: 'Evento',
			subcategoria: 'Geek',
			imagens: ['assets/eventos/fundo_tech.png'],
			titulo: 'Tech Expo Foz',
			descricao: 'Feira de tecnologia, inovação e startups em Foz do Iguaçu.',
			detalhes: ['Tipo: Feira', 'Categoria: Geek', 'Localidade: Foz do Iguaçu'],
			localidade: 'Foz do Iguaçu',
			endereco: 'Rua das Carmelias, 456',
			local:'Convenção das Roseiras',
			data:'26-09-2026',
			entrada: 50.00
			},
			{
			id: 17,
			categoria: 'Evento',
			subcategoria: 'Música',
			imagens: ['assets/eventos/fundo_tech.png'],
			titulo: 'Sertanejo na Praça Londrina',
			descricao: 'Show ao ar livre com grandes nomes do sertanejo.',
			detalhes: ['Tipo: Show', 'Categoria: Música', 'Localidade: Londrina'],
			localidade: 'Londrina',
			endereco: 'Rua das Carmelias, 456',
			local:'Convenção das Roseiras',
			data:'26-09-2026',
			entrada: 35.00
			},
			{
			id: 18,
			categoria: 'Evento',
			subcategoria: 'Geek',
			imagens: ['assets/eventos/fundo_tech.png'],
			titulo: 'Encontro Nerd Guarapuava',
			descricao: 'Reunião de fãs de games, RPG e cultura pop.',
			detalhes: ['Tipo: Encontro', 'Categoria: Geek', 'Localidade: Guarapuava'],
			localidade: 'Guarapuava',
			endereco: 'Rua das Carmelias, 456',
			local:'Convenção das Roseiras',
			data:'26-09-2026',
			entrada: 15.00
			},
			{
			id: 19,
			categoria: 'Evento',
			subcategoria: 'Música',
			imagens: ['assets/eventos/fundo_tech.png'],
			titulo: 'Festival de MPB Paranaguá',
			descricao: 'Grandes nomes da música popular brasileira no litoral do PR.',
			detalhes: ['Tipo: Show', 'Categoria: Música', 'Localidade: '],
			localidade: 'Paranaguá',
			endereco: 'Rua das Carmelias, 456',
			local:'Convenção das Roseiras',
			data:'26-09-2026',
			entrada:  60.00
			},
			{
			id: 20,
			categoria: 'Evento',
			subcategoria: 'Geek',
			imagens: ['assets/eventos/fundo_tech.png'],
			titulo: 'Cosplay Parade São José dos Pinhais',
			descricao: 'Desfile de cosplay e cultura geek com premiação.',
			detalhes: ['Tipo: Encontro', 'Categoria: Geek', 'Localidade: '],
			localidade: 'São José dos Pinhais',
			endereco: 'Rua das Carmelias, 456',
			local:'Convenção das Roseiras',
			data:'26-09-2026',
			entrada: 0.0
		}]
	}]
}]
