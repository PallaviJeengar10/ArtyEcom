import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ProductAddUpdateComponent } from './product-add-update/product-add-update.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ProductDeleteComponent,
    ProductListComponent,
    ProductAddUpdateComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
  ],
})
export class ProductModule {}
