import { Component, HostListener } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { ItemCarrinho } from '../../models/item-carrinho';
import { CartService } from '../../services/cart.service';
import { CheckoutService } from '../../services/checkout.service';
import { ValuesService } from '../../services/values.service';

@Component({
  selector: 'app-checkout',
  standalone: false,
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  cartItems: ItemCarrinho[] = [];
  total: number = 0;

  constructor(
    private router: Router,
    private cartService: CartService,
    private checkoutService: CheckoutService,
    public formatBrl: ValuesService
  ) {
    this.listenRouterNavigation();
  }

  ngOnInit() {
    // Se o cartService for observable:
    this.cartService.getCart().subscribe(cartItems => {
      this.cartItems = cartItems;
	  this.cartService.getTotal().subscribe(total => {
		this.total = total;
	  });
			this.checkoutService.iniciarCheckout(cartItems);

      // Opcional: use se tiver lógica extra no CheckoutService
	  this.checkoutService.getDadosCheckout().subscribe(data => {
		this.cartItems = data.cartItems;
		this.total = data.total;
	  });
	    });
  }

  // Cancela checkout ao sair da aba/página
  @HostListener('window:beforeunload', ['$event'])
  handleBeforeUnload(event: Event) {
    this.checkoutService.cancelarCheckout();
  }

  ngOnDestroy() {
    this.checkoutService.cancelarCheckout();
  }

  // Escuta mudanças de rota para cancelar checkout se sair do componente
  private listenRouterNavigation() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart && !event.url.includes('/checkout')) {
        this.checkoutService.cancelarCheckout();
      }
    });
  }

  removeItem(productId: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== productId);
    this.cartService.cartSubject.next(this.cartItems); // atualiza carrinho
    this.cartService.updateTotal(); // recalcula total
  }

  finalizePurchase() {
    // Aqui entraria a integração com gateway de pagamento ou backend
    console.log('Compra Finalizada');
  }
}
