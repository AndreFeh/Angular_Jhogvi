import { Card } from './card';
import { Street } from './street';

export interface Client {
  id: number;
  firstNome: string;
  lastNome: string;
  email: string;
  cartoes: Card[];
  enderecos: Street[];
}
