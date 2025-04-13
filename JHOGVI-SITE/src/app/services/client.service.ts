import { Injectable } from '@angular/core';
import { Client } from '../models/client';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
	private clientData: Client = {
		id: 1,
		firstNome: 'Nome',
		lastNome: 'Sobrenome',
		email: 'email@email.com',
		cartoes: [
		  { numero: '0000 0000 0000 1234', validade: '12/26' },
		  { numero: '0001 0000 0000 5678', validade: '09/25' }
		],
		enderecos: [
		  { rua: 'Rua das Avenidas', cidade: 'Curitiba', cep: '80000-000' },
		  { rua: 'Av. das Torres', cidade: 'Curitiba', cep: '82000-000' }
		]
	  };

	  constructor() {}

	  getCliente(): Observable<Client> {
		return of(this.clientData);
	  }

	  putProfile(dadosEditados: any): Observable<any> {
		this.clientData = { ...this.clientData, ...dadosEditados }; // simula atualização
		console.log('Perfil atualizado:', this.clientData);
		return of({ success: true });
	  }
}
