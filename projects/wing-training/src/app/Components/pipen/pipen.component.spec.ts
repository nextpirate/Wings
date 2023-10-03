import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipenComponent } from './pipen.component';

describe('PipenComponent', () => {
  let component: PipenComponent;
  let fixture: ComponentFixture<PipenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipenComponent]
    });
    fixture = TestBed.createComponent(PipenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
