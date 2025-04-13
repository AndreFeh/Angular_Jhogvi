import { Component, Input } from '@angular/core';
import { ValuesService } from '../../../services/values.service';

@Component({
  selector: 'app-card-resumo',
  standalone: false,
  templateUrl: './card-resumo.component.html',
  styleUrl: './card-resumo.component.css'
})
export class CardResumoComponent {
	@Input()imgProduto!: string;
	@Input()titulo!: string;
	@Input()detalhes!: string;
	@Input()valor!: number;
	@Input()quantidade!: number;

	constructor(public formatBrl:ValuesService){}
}
