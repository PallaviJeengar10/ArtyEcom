import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCardContainerComponent } from './form-card-container.component';

describe('FormCardContainerComponent', () => {
  let component: FormCardContainerComponent;
  let fixture: ComponentFixture<FormCardContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCardContainerComponent]
    });
    fixture = TestBed.createComponent(FormCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
