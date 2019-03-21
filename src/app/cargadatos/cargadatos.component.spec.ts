import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargadatosComponent } from './cargadatos.component';

describe('CargadatosComponent', () => {
  let component: CargadatosComponent;
  let fixture: ComponentFixture<CargadatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargadatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargadatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
