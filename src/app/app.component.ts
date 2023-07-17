import { Component, EventEmitter, Output } from '@angular/core';
import { CurrencyService } from './currency.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'currency-app';
  currencyDataEmitter: EventEmitter<any> = new EventEmitter<any>();
  constructor(private currencyService: CurrencyService) { 
 
  }

  fetchCurrencyData(month: string) {
    this.currencyService.getCurrencyData(month).subscribe((data: any) => {
      const array = Object.keys(data.GRAPH).map((key) => { return {name: key, value: data.GRAPH[key].EUR } });
      this.currencyDataEmitter.emit(array);
    });
  }
}
