import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environments';
import { SubCategory } from './models/subCategoryDto';

@Injectable({
  providedIn: 'root',
})
export class SubCategoriesService {
  url = environment.apiUrl + 'catalog/subCategory/';

  constructor(private http: HttpClient) {}

  getSubCategoryList(): Observable<SubCategory[]> {
    return this.http.get<SubCategory[]>(this.url + 'getSubCategoryList');
  }

  createSubCategory(newCategory: SubCategory): Observable<number> {
    const params = new HttpParams()
      .set('SubCategoryName', newCategory.subCategoryName)
      .set('CategoryId', newCategory.categoryId);
    return this.http
      .post<any>(this.url + 'addNewSubCategory', {}, { params })
      .pipe(map((response) => response.id));
  }

  updateSubCategory(
    id: number,
    updatecategoryRequest: SubCategory
  ): Observable<any> {
    const params = new HttpParams()
      .set('SubCategoryName', updatecategoryRequest.subCategoryName)
      .set('CategoryId', updatecategoryRequest.categoryId);
    return this.http.put(
      `${this.url}updateSubCategory/${id}`,
      {},
      { params, responseType: 'text' }
    );
  }

  deleteSubCategory(subCategoryId: number): Observable<any> {
    return this.http.delete(`${this.url}deleteSubCategory/${subCategoryId}`, {
      responseType: 'text',
    });
  }
}
