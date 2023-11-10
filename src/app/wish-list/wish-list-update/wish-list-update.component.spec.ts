import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishListUpdateComponent } from './wish-list-update.component';

describe('WishListUpdateComponent', () => {
  let component: WishListUpdateComponent;
  let fixture: ComponentFixture<WishListUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WishListUpdateComponent]
    });
    fixture = TestBed.createComponent(WishListUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
