import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Produto } from '../../services/produtos.service';
import { tap } from 'rxjs';
import { ParsePrecoPipe } from '../../shared/parse-preco.pipe';

@Component({
  selector: 'app-shopping-cart',
  standalone: false,
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})

export class ShoppingCartComponent implements OnInit {
	products: Produto[] = [];
	totalPrice: number = 0;
	totalQtd: number = 0;

	constructor(private service: CartService, private parsePreco:ParsePrecoPipe) {}

	ngOnInit(): void {
		this.service.getCart().pipe(
		  tap(cart => {
			this.products = cart;
			this.calculateTotal();
		  })
		).subscribe();
	  }

	calculateTotal() {
	  this.totalPrice = this.products.reduce(
		(acc, item) => acc + item.preco * item.qtd, 0
	  );
	  this.totalQtd = this.products.reduce((acc, item) => acc + item.qtd, 0);
	}

	updateQtd(productId: number, newQtd: number) {
		const current = this.products.find(p => p.id === productId);
		if (!current) return;

		if (newQtd > current.qtd) {
		  // Aumentou
		  this.service.incrementToCart(productId);
		} else if (newQtd < current.qtd) {
		  // Diminuiu
		  this.service.decrementToCart(productId);
		}

		// O subscribe no ngOnInit já cuida de atualizar o products e os totais
	  }

	// removeFromCart(productId: number) {
	//   this.service.removeFromCart(productId);
	//   this.updateCartData(); // Atualize os dados do carrinho
	// }
  }
