import { ChangeDetectorRef, Component } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent {
  constructor(
    private categoriesService: CategoriesService,
    private router: Router,
    private changeDetector: ChangeDetectorRef
  ) {}

  categories: any[];
  routerUrlDelete = 'category/delete';

  async ngOnInit() {
    await this.loadCategories();
  }

  async loadCategories() {
    try {
      this.categories = await this.categoriesService
        .getCategoryList()
        .toPromise();
    } catch (error) {
      console.error(error);
    }
  }

  delete(categoryId: number) {
    this.categoriesService.deleteCategory(categoryId).subscribe(
      async (response) => {
        alert(`Category Deleted id: ${categoryId}`);
        await this.loadCategories();
        this.changeDetector.detectChanges();
      },
      (error) => {
        alert(`Error in deleting Cateory id: ${categoryId}`);
        console.log(error);
      }
    );
  }
}
