import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, signal, ViewEncapsulation } from '@angular/core';
import { FilterService } from '../../../services/filter.service';

@Component({
  selector: 'app-filter',
  standalone: false,
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None

})
export class FilterComponent {
	nome: string='';
	tipo: string='';
	categoria: string='Categoria';
	localidade: string='Estado';

	@Input() tituloLocalidade: string='';
	@Input()tituloTipo: string='';
	@Input()tituloNome: string='';
	tituloCategoria: string='Categoria';


	@Input()opcoesCat:string[]=[''];
	@Input() opcoesLocal:string[]=[''];

	@Output() filtrar = new EventEmitter<any>();
	@Output() limpar= new EventEmitter<void>();

	constructor(private filterService:FilterService){}

	protected value:string='';

	protected onInput(event: Event) {
	  this.value = (event.target as HTMLInputElement).value;
	}
	private estadoInicial = {
		nome: this.nome,
		tipo: this.tipo,
		categoria: 'Categoria', // Mantém a categoria como rótulo
		localidade: 'Estado' // Mantém a localidade como rótulo
	  };

	public nenhumResultado = false; // Começa falso

	capitalizeFirst(text: string): string {
		return text.charAt(0).toUpperCase() + text.slice(1);
	  }

	  aplicarFiltro() {
		const filtros = {
			nome: this.nome,
			tipo: this.tipo,
			categoria: this.categoria,
			localidade: this.localidade
		};

		this.filtrar.emit(filtros);
	}

	limparFiltro() {
		this.nenhumResultado = false;
		this.nome = '';
		this.tipo = '';
		this.categoria = 'Categoria';
		this.localidade = 'Estado';
		this.limpar.emit();
		alert("Filtros limpos!");
	  }

}
