import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFieldComponent } from './view-field.component';

describe('ViewFieldComponent', () => {
  let component: ViewFieldComponent;
  let fixture: ComponentFixture<ViewFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
