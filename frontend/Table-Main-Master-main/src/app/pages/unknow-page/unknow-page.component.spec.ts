import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnknowPageComponent } from './unknow-page.component';

describe('UnknowPageComponent', () => {
  let component: UnknowPageComponent;
  let fixture: ComponentFixture<UnknowPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnknowPageComponent]
    });
    fixture = TestBed.createComponent(UnknowPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
