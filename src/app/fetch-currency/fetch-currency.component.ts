import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrencyService } from '../currency.service';

@Component({
  selector: 'fetch-currency',
  templateUrl: './fetch-currency.component.html',
  styleUrls: ['./fetch-currency.component.scss']
})
export class FetchCurrencyComponent {
  month: string = "";
  @Output() fetchData: EventEmitter<string> = new EventEmitter<string>();

}
