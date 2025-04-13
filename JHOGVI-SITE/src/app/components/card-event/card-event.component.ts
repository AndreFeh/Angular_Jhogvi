import { Component, Input } from '@angular/core';
import { ValuesService } from '../../services/values.service';

@Component({
  selector: 'app-card-event',
  standalone: false,
  templateUrl: './card-event.component.html',
  styleUrl: './card-event.component.css'
})
export class CardEventComponent {
	@Input() id:number=0;
imgEvent: string='assets/img/eventos/img-evento.png';
@Input()title: string='';
@Input()local: string='';
@Input()city: string='';
@Input()street: string='';
@Input()date: string='';
@Input()price: number=0;
@Input()subcategoria: string='';

constructor(private valuesService:ValuesService, public formatBrl:ValuesService){}
}
