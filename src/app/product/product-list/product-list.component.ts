import { ChangeDetectorRef, Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../models/productDto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  constructor(
    private productsService: ProductsService,
    private router: Router,
    private changeDetector: ChangeDetectorRef
  ) {}

  products: any[];
  routerUrlDelete = 'product/delete';

  async ngOnInit() {
    await this.loadProducts();
  }

  async loadProducts() {
    try {
      this.products = await this.productsService.getProductList().toPromise();
    } catch (error) {
      console.error(error);
    }
  }

  delete(productId: number) {
    this.productsService.deleteProduct(productId).subscribe(
      async (response) => {
        alert(`Product Deleted id: ${productId}`);
        await this.loadProducts();
        this.changeDetector.detectChanges();
      },
      (error) => {
        alert(`Error in deleting Product id: ${productId}`);
        console.log(error);
      }
    );
  }
}
