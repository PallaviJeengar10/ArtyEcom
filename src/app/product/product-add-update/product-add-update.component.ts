import { Component } from '@angular/core';
import { Product } from '../models/productDto';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { SubCategory } from 'src/app/sub-category/models/subCategoryDto';
import { SubCategoriesService } from 'src/app/sub-category/sub-categories.service';
import { FormErrorService } from 'src/app/services/form-error.service';

@Component({
  selector: 'app-product-add-update',
  templateUrl: './product-add-update.component.html',
  styleUrls: ['./product-add-update.component.scss'],
})
export class ProductAddUpdateComponent {
  product: Product = new Product();
  subCategories: any[];
  formHeading: string = 'Add Product';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductsService,
    private subCategoriesService: SubCategoriesService,
    public formErrorService: FormErrorService
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.params['id'];
    if (productId && history.state.data) {
      this.formHeading = 'Edit Product';
      this.product = history.state.data;
    }
    this.loadSubCategories();
  }

  async loadSubCategories() {
    try {
      this.subCategories = await this.subCategoriesService
        .getSubCategoryList()
        .toPromise();
    } catch (error) {
      console.error(error);
    }
  }

  updateProduct(productId: number) {
    this.productService.updateProduct(productId, this.product).subscribe(
      (response) => {
        alert(`Product updated with id: ${productId}`);
      },
      (error) => {
        alert(`Error in Updating Product with id: ${productId}`);
        console.log(error);
      }
    );
  }

  addProduct() {
    this.productService.addProduct(this.product).subscribe(
      (id) => {
        alert(`Product created with id: ${id}`);
      },
      (error) => {
        alert(`Error in creating Product`);
        console.log(error);
      }
    );
  }

  onSubmit() {
    const categoryId = this.route.snapshot.params['id'];
    if (categoryId) {
      this.updateProduct(categoryId);
    } else {
      this.addProduct();
    }
    this.router.navigateByUrl('/product/list');
  }
}
