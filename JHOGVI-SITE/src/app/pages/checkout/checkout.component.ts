import { Component, Input } from '@angular/core';
import { ValuesService } from '../../services/values.service';

@Component({
  selector: 'app-checkout',
  standalone: false,
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
	@Input()price: number = 0;
	@Input()qtdTotal: number= 0;
	@Input()discount: number= 0;
	@Input()total: number= 0;

	/*!!!!!!!!!!!!!!!!!!!!!*/produtos: any;


	constructor(public formatBrl:ValuesService){}

}
