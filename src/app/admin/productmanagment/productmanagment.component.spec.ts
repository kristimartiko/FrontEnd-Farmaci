import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductmanagmentComponent } from './productmanagment.component';

describe('ProductmanagmentComponent', () => {
  let component: ProductmanagmentComponent;
  let fixture: ComponentFixture<ProductmanagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductmanagmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductmanagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
