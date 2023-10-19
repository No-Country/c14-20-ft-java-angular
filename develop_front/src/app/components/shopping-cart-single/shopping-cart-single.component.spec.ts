import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartSingleComponent } from './shopping-cart-single.component';

describe('ShoppingCartSingleComponent', () => {
  let component: ShoppingCartSingleComponent;
  let fixture: ComponentFixture<ShoppingCartSingleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingCartSingleComponent]
    });
    fixture = TestBed.createComponent(ShoppingCartSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
