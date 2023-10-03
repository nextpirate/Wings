import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingTemplateDrivenFormsComponent } from './using-template-driven-forms.component';

describe('UsingTemplateDrivenFormsComponent', () => {
  let component: UsingTemplateDrivenFormsComponent;
  let fixture: ComponentFixture<UsingTemplateDrivenFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsingTemplateDrivenFormsComponent]
    });
    fixture = TestBed.createComponent(UsingTemplateDrivenFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
