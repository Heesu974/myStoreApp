import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class TestCartService {
  private cartUrl = 'api/dataInCart';
  private log(message: string) {
    console.log('log excuted' + message);
  }
  constructor(private http: HttpClient) {}

  getDataInCart(): Observable<Product[]> {
    return this.http
      .get<Product[]>(this.cartUrl)
      .pipe(tap((_) => this.log('fetched data in cart')));
  }
}
