import { Component } from '@angular/core';
import { Order } from '../models/orderDto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-add-update',
  templateUrl: './order-add-update.component.html',
  styleUrls: ['./order-add-update.component.scss'],
})
export class OrderAddUpdateComponent {
  order: Order = new Order();
  formHeading: string = 'Add Order';
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const orderId = this.route.snapshot.params['id'];
    if (orderId && history.state.data) {
      this.formHeading = 'Edit Order';
      this.order = history.state.data;
    }
  }

  onSubmit() {
    if (this.order.id) {
    } else {
    }
    this.router.navigate(['/order/list']);
  }
}
