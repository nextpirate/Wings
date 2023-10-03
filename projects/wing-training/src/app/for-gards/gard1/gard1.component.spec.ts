import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gard1Component } from './gard1.component';

describe('Gard1Component', () => {
  let component: Gard1Component;
  let fixture: ComponentFixture<Gard1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Gard1Component]
    });
    fixture = TestBed.createComponent(Gard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
