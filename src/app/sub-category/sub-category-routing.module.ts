import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DeleteComponent } from './delete/delete.component';
import { Routes, RouterModule } from '@angular/router';
import { SubCategoryAddUpdateComponent } from './sub-category-add-update/sub-category-add-update.component';

const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'add', component: SubCategoryAddUpdateComponent },
  { path: 'edit/:id', component: SubCategoryAddUpdateComponent },
  { path: 'delete/:id', component: DeleteComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubCategoryRoutingModule {}
