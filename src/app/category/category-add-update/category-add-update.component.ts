import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../models/categoryDto';
import { CategoriesService } from '../categories.service';
import { FormErrorService } from 'src/app/services/form-error.service';
@Component({
  selector: 'app-category-add-update',
  templateUrl: './category-add-update.component.html',
  styleUrls: ['./category-add-update.component.scss'],
})
export class CategoryAddUpdateComponent implements OnInit {
  category: Category = new Category();
  formHeading: string = 'Add Category';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoriesService: CategoriesService,
    public formErrorService: FormErrorService
  ) {}

  ngOnInit(): void {
    const categoryId = this.route.snapshot.params['id'];

    if (categoryId && history.state.data) {
      this.formHeading = 'Edit Category';
      this.category = history.state.data;
    }
  }

  updateCategory(categoryId: number) {
    this.categoriesService
      .updateCategory(categoryId, this.category.categoryName)
      .subscribe(
        (response) => {
          alert(`Category updated with id: ${categoryId}`);
        },
        (error) => {
          alert(`Error in Updating Category with id: ${categoryId}`);
          console.log(error);
        }
      );
  }

  addCategory() {
    this.categoriesService.addCategory(this.category.categoryName).subscribe(
      (id) => {
        alert(`Category created with id: ${id}`);
      },
      (error) => {
        alert(`Error in creating category`);
        console.log(error);
      }
    );
  }

  onSubmit() {
    const categoryId = this.route.snapshot.params['id'];
    if (categoryId) {
      this.updateCategory(categoryId);
    } else {
      this.addCategory();
    }
    this.router.navigateByUrl('/category/list');
  }
}
