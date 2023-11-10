import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDeleteComponent } from './order-delete/order-delete.component';
import { OrderRoutingModule } from './order-routing.module';
import { SharedModule } from '../shared/shared.module';
import { OrderAddUpdateComponent } from './order-add-update/order-add-update.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    OrderListComponent,
    OrderDeleteComponent,
    OrderAddUpdateComponent,
  ],
  imports: [CommonModule, OrderRoutingModule, SharedModule, FormsModule],
})
export class OrderModule {}
