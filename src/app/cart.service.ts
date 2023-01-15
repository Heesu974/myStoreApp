import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];
  private log(message: string) {
    console.log(`inside cartService: ${message}`);
  }
  private productsUrl = 'api/products';
  private cartUrl ='api/cart';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }

  constructor(private http: HttpClient) {}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: 리모트 서버로 에러 메시지 보내기
      console.error(error); // 지금은 콘솔에 로그를 출력합니다.

      // TODO: 사용자가 이해할 수 있는 형태로 변환하기
      this.log(`${operation} failed: ${error.message}`);

      // 애플리케이션 로직이 끊기지 않도록 기본값으로 받은 객체를 반환합니다.
      return of(result as T);
    };
  }

  getIntoCart(product: Product) {
    this.items.push(product);
  }
  showProductsInCart() {
    return this.items;
  }

  getShippingCost() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }

  // GET: 서버에서 products 목록 가져오기
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl).pipe(
      tap((_) => this.log('fetched static products')),
      catchError(this.handleError<Product[]>('getProducts', []))
    );
  }

  //GET: 서버에서 cart 목록 가져오기.
  getCart():Observable<Product[]>{

    console.log('cart 목록 가져오기 products:', this.http.get<Product[]>(this.cartUrl))
    return this.http.get<Product[]>(this.cartUrl).pipe(tap(_ => this.log('fetched cart')),
    catchError(this.handleError<Product[]>('getCart', []))
    );

  }

  // PUT: 서버에 저장된 cart 목록 변경하기. - 장바구니에 상품이 추가될 때,
  updateCart(product:Product):Observable<any> {
    console.log('cart에 목록 추가하기 product:', product)
    return this.http.put(this.cartUrl, product, this.httpOptions).pipe(tap(_=>this.log('Succeded update cart')),
    catchError(this.handleError<Product>('updateCart')))
  }

  
}
