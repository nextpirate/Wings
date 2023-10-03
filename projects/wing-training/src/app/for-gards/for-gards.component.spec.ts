import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForGardsComponent } from './for-gards.component';

describe('ForGardsComponent', () => {
  let component: ForGardsComponent;
  let fixture: ComponentFixture<ForGardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForGardsComponent]
    });
    fixture = TestBed.createComponent(ForGardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
