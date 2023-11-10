import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishListListComponent } from './wish-list-list/wish-list-list.component';
import { WishListUpdateComponent } from './wish-list-update/wish-list-update.component';
import { WishListDeleteComponent } from './wish-list-delete/wish-list-delete.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'list', component: WishListListComponent },
  { path: 'edit/:id', component: WishListUpdateComponent },
  { path: 'delete/:id', component: WishListDeleteComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WishListRoutingModule {}
