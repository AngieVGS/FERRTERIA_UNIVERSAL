import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraContactoComponent } from './barra-contacto.component';

describe('BarraContactoComponent', () => {
  let component: BarraContactoComponent;
  let fixture: ComponentFixture<BarraContactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraContactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
