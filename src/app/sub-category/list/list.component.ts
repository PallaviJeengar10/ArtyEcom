import { ChangeDetectorRef, Component } from '@angular/core';
import { SubCategoriesService } from '../sub-categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  constructor(
    private subCategoriesService: SubCategoriesService,
    private router: Router,
    private changeDetector: ChangeDetectorRef
  ) {}

  subCategories: any[];
  routerUrlDelete = 'subCategory/delete';

  async ngOnInit() {
    await this.loadSubCategories();
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

  delete(subCategoryId: number) {
    this.subCategoriesService.deleteSubCategory(subCategoryId).subscribe(
      async (response) => {
        alert(`Sub Category Deleted id: ${subCategoryId}`);
        await this.loadSubCategories();
        this.changeDetector.detectChanges();
      },
      (error) => {
        alert(`Error in deleting Sub Cateory id: ${subCategoryId}`);
        console.log(error);
      }
    );
  }
}
