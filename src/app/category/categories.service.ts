import { Injectable } from '@angular/core';
import { Category } from './models/categoryDto';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  url = environment.apiUrl + 'catalog/category/';

  constructor(private http: HttpClient) {}

  getCategoryList(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url + 'getCategoryList');
  }

  addCategory(categoryName: string): Observable<number> {
    const params = new HttpParams().set('CategoryName', categoryName);
    return this.http
      .post<any>(this.url + 'addNewCategory', {}, { params })
      .pipe(map((response) => response.id));
  }

  deleteCategory(categoryId: number): Observable<any> {
    const url = `${this.url}deleteCategory/${categoryId}`;
    return this.http.delete(url, { responseType: 'text' });
  }

  updateCategory(id: number, categoryName: string): Observable<any> {
    const params = new HttpParams().set('CategoryName', categoryName);
    const url = `${this.url}updateCategory/${id}`;
    return this.http.put(url, {}, { params, responseType: 'text' });
  }
}
