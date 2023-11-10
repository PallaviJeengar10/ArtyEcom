import { Component } from '@angular/core';
import { OrdersService } from '../orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent {
  constructor(private ordersService: OrdersService, private router: Router) {}

  orders: any[];
  routerUrlDelete = 'order/delete';

  async ngOnInit() {
    try {
      this.orders = await this.ordersService.getOrderList().toPromise();
    } catch (error) {
      console.error(error);
    }
  }

  delete(id: number) {
    this.router.navigateByUrl((this.routerUrlDelete += '/' + id));
  }
}
