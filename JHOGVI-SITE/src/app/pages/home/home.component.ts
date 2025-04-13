import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../../services/produtos.service';
import { Produto } from '../../models/produto';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
	produtos: Produto[] = []; // É ISSO UMA BOA PRATICA EM VEZ DE ANY[]
	imgMockups: string[] = [];
	imgBack: string = 'assets/fundo_tech.png';
	titulo: string = '';
	descricao: string = '';
	detalhes: string[] = [];

	selectedBone: any = null;

	constructor(private produtosService: ProdutosService) {}

	ngOnInit() {
		this.produtosService.getProdutosPorCategoria('boné').subscribe((data) => {
			this.produtos = data;
			if (this.produtos.length > 0) {
			  this.selectedBone = this.produtos[0]; // pré-seleciona o primeiro boné
			}
		  });
	}
	selecionarBone(bone: any) {
		this.selectedBone = bone;
	  }



}
