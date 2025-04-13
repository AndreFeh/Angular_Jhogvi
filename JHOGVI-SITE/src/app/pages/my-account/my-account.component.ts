import { Component, Input } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client';
import { Card } from '../../models/card';
import { Street } from '../../models/street';

@Component({
  selector: 'app-my-account',
  standalone: false,
  templateUrl: './my-account.component.html',
  styleUrl: './my-account.component.css'
})
export class MyAccountComponent {
	@Input()imgProfile: string = '';
	@Input()nome: string='Andre Fonseca de Carvalho Silva';
	@Input()icoCarteira: string='assets/ico/carteira_digital.ico';
	@Input()icoCarrinho: string='assets/ico/carrinho.ico';
	@Input()icoEndereco: string='assets/ico/casa.ico';
	@Input()icoCompras: string='assets/ico/shop.ico';
	@Input()icoSup: string='assets/ico/pergunta.ico';
	@Input()imgPedidosGeral: string='assets/ico/pedidos_geral.ico';
	@Input()imgRastreioPedidos: string='assets/ico/rastreio.ico';
	@Input()imgPedidosConcluidos: string='assets/ico/pedidos_concluidos.ico';
	@Input()imgMinhasAvaliacoes: string='assets/ico/satisfacao.ico';

	secaoAtiva: string = 'perfil'; // valor padrão
	clientData!: Client;
	cards: Card[] = [];
	streets: Street[] = [];

	showProfileEditor = false;
	showAddressEditor = false;
	showOrdersSection = false;
	showWalletSection = false;

	constructor(private clientService: ClientService) {}

	ngOnInit(): void {
		this.clientService.getCliente().subscribe(data => {
		this.clientData = data;
		this.cards = data.cartoes;   // Supondo que venha assim da API
		this.streets = data.enderecos; // Também vindo junto com o cliente

		console.log('Client data carregado:', this.clientData);
		});
	}

	perfil = { nome: 'João', email: 'joao@email.com' };

	saveProfile(dadosAtualizados: any) {
		this.clientService.putProfile(dadosAtualizados).subscribe(
		  () => {
			this.clientData = { ...this.clientData, ...dadosAtualizados }; // ✅ Corrige aqui
			this.showProfileEditor = false;
		  },
		  (err) => {
			console.error('Erro ao atualizar perfil:', err);
		  }
		);
	  }




	toggleSection(section: 'profile' | 'address' | 'orders' | 'wallet') {
	// Zera todos
	this.showProfileEditor = false;
	this.showAddressEditor = false;
	this.showOrdersSection = false;
	this.showWalletSection = false;

	// Ativa só o que foi clicado
	switch (section) {
		case 'profile':
		this.showProfileEditor = true;
		break;
		case 'address':
		this.showAddressEditor = true;
		break;
		case 'orders':
		this.showOrdersSection = true;
		break;
		case 'wallet':
		this.showWalletSection = true;
		break;
	}
	}

	closeAllSections() {
	this.showProfileEditor = false;
	this.showAddressEditor = false;
	this.showOrdersSection = false;
	this.showWalletSection = false;
	}



	mostrarSecao(secao: string): void {
	this.secaoAtiva = secao;
	}

}
