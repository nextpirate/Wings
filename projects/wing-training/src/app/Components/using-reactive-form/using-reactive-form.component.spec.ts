import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingReactiveFormComponent } from './using-reactive-form.component';

describe('UsingReactiveFormComponent', () => {
  let component: UsingReactiveFormComponent;
  let fixture: ComponentFixture<UsingReactiveFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsingReactiveFormComponent]
    });
    fixture = TestBed.createComponent(UsingReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
