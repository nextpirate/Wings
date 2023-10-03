import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForRoutegardsssComponent } from './for-routegardsss.component';

describe('ForRoutegardsssComponent', () => {
  let component: ForRoutegardsssComponent;
  let fixture: ComponentFixture<ForRoutegardsssComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForRoutegardsssComponent]
    });
    fixture = TestBed.createComponent(ForRoutegardsssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
