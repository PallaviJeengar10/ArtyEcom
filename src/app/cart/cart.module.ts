import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartAddComponent } from './cart-add/cart-add.component';
import { CartUpdateComponent } from './cart-update/cart-update.component';
import { CartDeleteComponent } from './cart-delete/cart-delete.component';
import { CartRoutingModule } from './cart-routing.module';



@NgModule({
  declarations: [
    CartListComponent,
    CartAddComponent,
    CartUpdateComponent,
    CartDeleteComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
