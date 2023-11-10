import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryDeleteComponent } from './category-delete/category-delete.component';
import { RouterModule, Routes } from '@angular/router';
import { CategoryAddUpdateComponent } from './category-add-update/category-add-update.component';

const routes: Routes = [
  { path: 'list', component: CategoryListComponent },
  { path: 'edit/:id', component: CategoryAddUpdateComponent },
  { path: 'delete/:id', component: CategoryDeleteComponent },
  { path: 'add', component: CategoryAddUpdateComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
