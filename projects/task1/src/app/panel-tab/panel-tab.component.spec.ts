import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelTabComponent } from './panel-tab.component';

describe('PanelTabComponent', () => {
  let component: PanelTabComponent;
  let fixture: ComponentFixture<PanelTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelTabComponent]
    });
    fixture = TestBed.createComponent(PanelTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
