import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Client } from '../../../models/client';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
	@Input() dados!: any;
	@Output() salvar = new EventEmitter<any>();
	@Output() fechar = new EventEmitter<void>();

	dadosEditaveis: any = {};

	ngOnInit() {
		this.dadosEditaveis = { ...this.dados }; // faz uma cópia simples
	}


	emitirSalvar() {
		this.salvar.emit(this.dadosEditaveis);
	}
}
