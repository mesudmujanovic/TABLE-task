import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarGetByIdComponent } from './car-get-by-id.component';

describe('CarGetByIdComponent', () => {
  let component: CarGetByIdComponent;
  let fixture: ComponentFixture<CarGetByIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarGetByIdComponent]
    });
    fixture = TestBed.createComponent(CarGetByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
