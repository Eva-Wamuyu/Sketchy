import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectShapeComponent } from './select-shape.component';

describe('SelectShapeComponent', () => {
  let component: SelectShapeComponent;
  let fixture: ComponentFixture<SelectShapeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectShapeComponent]
    });
    fixture = TestBed.createComponent(SelectShapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
