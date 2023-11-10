import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryDeleteComponent } from './category-delete/category-delete.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryRoutingModule } from './category-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CategoryAddUpdateComponent } from './category-add-update/category-add-update.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CategoryDeleteComponent,
    CategoryListComponent,
    CategoryAddUpdateComponent,
  ],
  imports: [CommonModule, CategoryRoutingModule, SharedModule, FormsModule],
})
export class CategoryModule {}
