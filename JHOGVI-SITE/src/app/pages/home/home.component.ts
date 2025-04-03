import { Component } from '@angular/core';
import { produtos } from '../../data/produtos'; // Importe o arquivo de dados


@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
	produtos=produtos;

	imgMockups:string[]=[
		'assets/3d/mockup1.png',
		'assets/3d/mockup2.png',
		'assets/3d/mockup3.png',
		'assets/3d/mockup4.png',
		'assets/3d/mockup5.png',
		'assets/3d/mockup6.png',
		'assets/3d/mockup7.png',
		'assets/3d/mockup8.png',
		'assets/3d/mockup9.png',
		'assets/3d/mockup10.png'];
	imgBack :string= 'assets/fundo_tech.png';
	titulo :string= '';
	descricao :string= '';
	detalhes:string[] = [];

	constructor(){}

	  // Variáveis para armazenar os dados do produto selecionado
	  selectedBone: any = this.produtos[0]; // Iniciar com o primeiro boné (padrão)

	  // Função para atualizar os dados do boné quando um botão for clicado
	  selecionarBone(bone: any) {
		this.selectedBone = bone;
	  }


}
