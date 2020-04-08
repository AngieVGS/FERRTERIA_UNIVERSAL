import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuzonContactoComponent } from './buzon-contacto.component';

describe('BuzonContactoComponent', () => {
  let component: BuzonContactoComponent;
  let fixture: ComponentFixture<BuzonContactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuzonContactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuzonContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
