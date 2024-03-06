import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapModalDeleteComponent } from './bootstrap-modal-delete.component';

describe('BootstrapModalDeleteComponent', () => {
  let component: BootstrapModalDeleteComponent;
  let fixture: ComponentFixture<BootstrapModalDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BootstrapModalDeleteComponent]
    });
    fixture = TestBed.createComponent(BootstrapModalDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
