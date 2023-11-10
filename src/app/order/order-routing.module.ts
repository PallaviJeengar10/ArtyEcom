import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderAddUpdateComponent } from './order-add-update/order-add-update.component';

const routes: Routes = [
  { path: 'list', component: OrderListComponent },
  { path: 'add', component: OrderAddUpdateComponent },
  { path: 'edit/:id', component: OrderAddUpdateComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {}
