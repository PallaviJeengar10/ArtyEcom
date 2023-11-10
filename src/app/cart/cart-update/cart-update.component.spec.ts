import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartUpdateComponent } from './cart-update.component';

describe('CartUpdateComponent', () => {
  let component: CartUpdateComponent;
  let fixture: ComponentFixture<CartUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartUpdateComponent]
    });
    fixture = TestBed.createComponent(CartUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
