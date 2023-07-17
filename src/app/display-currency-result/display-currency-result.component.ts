import { Component, EventEmitter, Input, ViewChild  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-display-currency-result',
  templateUrl: './display-currency-result.component.html',
  styleUrls: ['./display-currency-result.component.scss']
})
export class DisplayCurrencyResultComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @Input() currencyDataEmitter: EventEmitter<any> | undefined;
  displayedColumns: string[] = ['date', 'rate'];
  dataSource = new MatTableDataSource<PeriodicElement>()
  graphData = [];

  ngOnInit() {
    
    if(this.currencyDataEmitter){
      this.currencyDataEmitter.subscribe(data => {
        this.dataSource = new MatTableDataSource<PeriodicElement>(data);
        if(this.paginator){
          this.dataSource.paginator = this.paginator;
        }
        this.graphData = data;
      });
    }
  }
}

export interface PeriodicElement {
  name: string;
  value: string;
}
