import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardYsofComponent } from './hard-ysof.component';

describe('HardYsofComponent', () => {
  let component: HardYsofComponent;
  let fixture: ComponentFixture<HardYsofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardYsofComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardYsofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
