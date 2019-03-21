import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabwebComponent } from './labweb.component';

describe('LabwebComponent', () => {
  let component: LabwebComponent;
  let fixture: ComponentFixture<LabwebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabwebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabwebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
