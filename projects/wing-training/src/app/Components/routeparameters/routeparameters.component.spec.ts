import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteparametersComponent } from './routeparameters.component';

describe('RouteparametersComponent', () => {
  let component: RouteparametersComponent;
  let fixture: ComponentFixture<RouteparametersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouteparametersComponent]
    });
    fixture = TestBed.createComponent(RouteparametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
