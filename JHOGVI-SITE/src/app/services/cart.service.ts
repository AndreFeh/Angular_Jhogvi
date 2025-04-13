import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Produto } from './produtos.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
	private cartItems: Produto[] = [];

	private cartSubject = new BehaviorSubject<Produto[]>([]);
	cart$ = this.cartSubject.asObservable();

	getCart() {
	  return this.cart$;
	}

	addToCart(prod: Produto) {
	  const item = this.cartItems.find(p => p.id === prod.id);
	  if (item) {
		item.qtd! += 1;
	  } else {
		this.cartItems.push({ ...prod, qtd: 1 });
	  }
	  this.cartSubject.next(this.cartItems);
	}

	incrementToCart(prodId: number) {
	  const item = this.cartItems.find(p => p.id === prodId);
	  if (item) {
		item.qtd! += 1;
		this.cartSubject.next(this.cartItems);
	  }
	}

	decrementToCart(prodId: number) {
	  const item = this.cartItems.find(p => p.id === prodId);
	  if (item) {
		item.qtd!--;
		if (item.qtd! <= 0) {
		  this.cartItems = this.cartItems.filter(p => p.id !== prodId);
		}
		this.cartSubject.next(this.cartItems);
	  }
	}
  }
