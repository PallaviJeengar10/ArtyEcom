import { Component } from '@angular/core';
import { SubCategory } from '../models/subCategoryDto';
import { ActivatedRoute, Router } from '@angular/router';
import { SubCategoriesService } from '../sub-categories.service';
import { CategoriesService } from 'src/app/category/categories.service';
import { FormErrorService } from 'src/app/services/form-error.service';

@Component({
  selector: 'app-sub-category-add-update',
  templateUrl: './sub-category-add-update.component.html',
  styleUrls: ['./sub-category-add-update.component.scss'],
})
export class SubCategoryAddUpdateComponent {
  subCategory: SubCategory = new SubCategory();
  formHeading: string = 'Add Sub Category';
  categories: any[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private subCategoryService: SubCategoriesService,
    private categoriesService: CategoriesService,
    public formErrorService: FormErrorService
  ) {}

  ngOnInit(): void {
    const subCategoryId = this.route.snapshot.params['id'];
    if (subCategoryId && history.state.data) {
      this.formHeading = 'Edit Sub Category';
      this.subCategory = history.state.data;
      console.log(this.subCategory);
    }
    this.loadCategories();
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

  updateSubCategory(subCategoryId: number) {
    let updatedSubCategory: SubCategory = new SubCategory();
    updatedSubCategory.subCategoryName = this.subCategory.subCategoryName;
    updatedSubCategory.categoryId = this.subCategory.categoryId;
    this.subCategoryService
      .updateSubCategory(subCategoryId, updatedSubCategory)
      .subscribe(
        (response) => {
          alert(`Sub Category updated with id: ${subCategoryId}`);
        },
        (error) => {
          alert(`Error in Updating Sub Category with id: ${subCategoryId}`);
          console.log(error);
        }
      );
  }

  addSubCategory() {
    let addSubCategory: SubCategory = new SubCategory();
    addSubCategory.subCategoryName = this.subCategory.subCategoryName;
    addSubCategory.categoryId = this.subCategory.categoryId;

    this.subCategoryService.createSubCategory(addSubCategory).subscribe(
      (id) => {
        alert(`Sub Category created with id: ${id}`);
      },
      (error) => {
        alert(`Error in creating Sub Category`);
        console.log(error);
      }
    );
  }

  onSubmit() {
    const subCategoryId = this.route.snapshot.params['id'];
    if (subCategoryId) {
      this.updateSubCategory(subCategoryId);
    } else {
      this.addSubCategory();
    }
    this.router.navigateByUrl('/subCategory/list');
  }
}
