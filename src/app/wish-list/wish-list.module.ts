import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishListListComponent } from './wish-list-list/wish-list-list.component';
import { WishListAddComponent } from './wish-list-add/wish-list-add.component';
import { WishListUpdateComponent } from './wish-list-update/wish-list-update.component';
import { WishListDeleteComponent } from './wish-list-delete/wish-list-delete.component';
import { WishListRoutingModule } from './wish-list-routing.module';



@NgModule({
  declarations: [
    WishListListComponent,
    WishListAddComponent,
    WishListUpdateComponent,
    WishListDeleteComponent
  ],
  imports: [
    CommonModule,
    WishListRoutingModule
  ]
})
export class WishListModule { }
