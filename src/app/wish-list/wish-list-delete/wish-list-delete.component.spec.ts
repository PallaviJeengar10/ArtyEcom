import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishListDeleteComponent } from './wish-list-delete.component';

describe('WishListDeleteComponent', () => {
  let component: WishListDeleteComponent;
  let fixture: ComponentFixture<WishListDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WishListDeleteComponent]
    });
    fixture = TestBed.createComponent(WishListDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
