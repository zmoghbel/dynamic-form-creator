import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldAuthComponent } from './field-auth.component';

describe('FieldAuthComponent', () => {
  let component: FieldAuthComponent;
  let fixture: ComponentFixture<FieldAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
