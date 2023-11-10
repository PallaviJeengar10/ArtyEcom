import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddUpdateComponent } from './product-add-update/product-add-update.component';

const routes: Routes = [
  { path: 'list', component: ProductListComponent },
  { path: 'add', component: ProductAddUpdateComponent },
  { path: 'edit/:id', component: ProductAddUpdateComponent },
  { path: 'delete/:id', component: ProductDeleteComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
