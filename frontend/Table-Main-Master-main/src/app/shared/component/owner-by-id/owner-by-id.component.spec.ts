import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerByIdComponent } from './owner-by-id.component';

describe('OwnerByIdComponent', () => {
  let component: OwnerByIdComponent;
  let fixture: ComponentFixture<OwnerByIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerByIdComponent]
    });
    fixture = TestBed.createComponent(OwnerByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
