import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  constructor(private http: HttpClient) {}

  

  getCurrencyData(month: string) {
    const url = `/currency/${month}`;
    //const url = `/currency/${month}`;
    return this.http.get("http://localhost:7265/api" + url);
  }
}
