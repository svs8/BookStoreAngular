import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsToPlaceOrderComponent } from './user-details-to-place-order.component';

describe('UserDetailsToPlaceOrderComponent', () => {
  let component: UserDetailsToPlaceOrderComponent;
  let fixture: ComponentFixture<UserDetailsToPlaceOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailsToPlaceOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDetailsToPlaceOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
