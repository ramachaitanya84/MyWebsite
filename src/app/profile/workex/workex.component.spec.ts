import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkexComponent } from './workex.component';

describe('WorkexComponent', () => {
  let component: WorkexComponent;
  let fixture: ComponentFixture<WorkexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
