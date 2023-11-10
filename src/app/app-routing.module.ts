import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./user/user.module').then((loaded) => loaded.UserModule),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./cart/cart.module').then((loaded) => loaded.CartModule),
  },
  {
    path: 'category',
    loadChildren: () =>
      import('./category/category.module').then(
        (loaded) => loaded.CategoryModule
      ),
  },
  {
    path: 'order',
    loadChildren: () =>
      import('./order/order.module').then((loaded) => loaded.OrderModule),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./product/product.module').then((loaded) => loaded.ProductModule),
  },
  {
    path: 'subCategory',
    loadChildren: () =>
      import('./sub-category/sub-category.module').then(
        (loaded) => loaded.SubCategoryModule
      ),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./user/user.module').then((loaded) => loaded.UserModule),
  },
  {
    path: 'wishList',
    loadChildren: () =>
      import('./wish-list/wish-list.module').then(
        (loaded) => loaded.WishListModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
