import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gard2Component } from './gard2.component';

describe('Gard2Component', () => {
  let component: Gard2Component;
  let fixture: ComponentFixture<Gard2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Gard2Component]
    });
    fixture = TestBed.createComponent(Gard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
