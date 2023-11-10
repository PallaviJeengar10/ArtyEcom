import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderAddUpdateComponent } from './order-add-update.component';

describe('OrderAddUpdateComponent', () => {
  let component: OrderAddUpdateComponent;
  let fixture: ComponentFixture<OrderAddUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderAddUpdateComponent]
    });
    fixture = TestBed.createComponent(OrderAddUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
