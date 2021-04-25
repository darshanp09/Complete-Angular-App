import {Injectable} from '@angular/core';
import {IProduct} from './product.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()

export class productService {

  private url = 'http://localhost:8081/';

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.url);
  }

  getProductDetails(id: number): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(`${this.url}product/${id}`);
  }
}
