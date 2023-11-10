import { Injectable } from '@angular/core';
import { Order } from './models/orderDto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  url = environment.apiUrl + 'userInteraction/order/';

  constructor(private http: HttpClient) {}

  getOrderList(): Observable<Order[]> {
    return this.http.get<Order[]>(this.url + 'getOrderList');
  }
}
