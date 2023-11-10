import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Product } from './models/productDto';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  url = environment.apiUrl + 'catalog/product/';

  constructor(private http: HttpClient) {}

  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url + 'getProductList');
  }

  getParams(productInfo: Product): HttpParams {
    const params = new HttpParams()
      .set('ProductName', productInfo.productName)
      .set('ProductDescription', productInfo.productDescription)
      .set('Price', productInfo.price)
      .set('Quantity', productInfo.quantity)
      .set('SubCategoryId', productInfo.subCategoryId);
    return params;
  }
  addProduct(productInfo: Product): Observable<number> {
    const params: HttpParams = this.getParams(productInfo);
    return this.http
      .post<any>(this.url + 'addNewProduct', {}, { params })
      .pipe(map((response) => response.id));
  }

  updateProduct(id: number, productInfo: Product): Observable<any> {
    const params: HttpParams = this.getParams(productInfo);
    return this.http.put(
      `${this.url}updateProduct/${id}`,
      {},
      {
        params,
        responseType: 'text',
      }
    );
  }

  deleteProduct(productId: number): Observable<any> {
    const url = `${this.url}deleteProduct/${productId}`;
    return this.http.delete(url, { responseType: 'text' });
  }
}
