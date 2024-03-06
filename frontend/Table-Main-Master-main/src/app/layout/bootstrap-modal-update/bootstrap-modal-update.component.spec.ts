import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapModalUpdateComponent } from './bootstrap-modal-update.component';

describe('BootstrapModalUpdateComponent', () => {
  let component: BootstrapModalUpdateComponent;
  let fixture: ComponentFixture<BootstrapModalUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BootstrapModalUpdateComponent]
    });
    fixture = TestBed.createComponent(BootstrapModalUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
