import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategoryAddUpdateComponent } from './sub-category-add-update.component';

describe('SubCategoryAddUpdateComponent', () => {
  let component: SubCategoryAddUpdateComponent;
  let fixture: ComponentFixture<SubCategoryAddUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubCategoryAddUpdateComponent]
    });
    fixture = TestBed.createComponent(SubCategoryAddUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
