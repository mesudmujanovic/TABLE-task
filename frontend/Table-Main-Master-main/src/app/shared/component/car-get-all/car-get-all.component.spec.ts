import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarGetAllComponent } from './car-get-all.component';

describe('CarGetAllComponent', () => {
  let component: CarGetAllComponent;
  let fixture: ComponentFixture<CarGetAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarGetAllComponent]
    });
    fixture = TestBed.createComponent(CarGetAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
