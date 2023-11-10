import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartUpdateComponent } from './cart-update/cart-update.component';

const routes: Routes = [
  { path: 'list', component: CartListComponent },
  { path: 'edit/:id', component: CartUpdateComponent },
  { path: 'delete/:id', component: CartUpdateComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartRoutingModule {}
