import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishListListComponent } from './wish-list-list.component';

describe('WishListListComponent', () => {
  let component: WishListListComponent;
  let fixture: ComponentFixture<WishListListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WishListListComponent]
    });
    fixture = TestBed.createComponent(WishListListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
