import { Component, Input } from '@angular/core';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-resulted',
  standalone: false,
  templateUrl: './resulted.component.html',
  styleUrl: './resulted.component.css'
})
export class ResultedComponent {
// Comprar() {
// throw new Error('Method not implemented.');
// }
	@Input() cartItems: any[] = [];
	@Input() totalPrice: number = 0;

	constructor(private cartService: CartService) {}

	ngOnInit(): void {
	}

}

