import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DeleteComponent } from './delete/delete.component';
import { SubCategoryRoutingModule } from '../sub-category/sub-category-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { SubCategoryAddUpdateComponent } from './sub-category-add-update/sub-category-add-update.component';

@NgModule({
  declarations: [ListComponent, DeleteComponent, SubCategoryAddUpdateComponent],
  imports: [CommonModule, SubCategoryRoutingModule, SharedModule, FormsModule],
})
export class SubCategoryModule {}
