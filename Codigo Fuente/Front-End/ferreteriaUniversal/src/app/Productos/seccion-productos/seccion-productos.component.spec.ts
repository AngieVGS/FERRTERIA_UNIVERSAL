import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionProductosComponent } from './seccion-productos.component';

describe('SeccionProductosComponent', () => {
  let component: SeccionProductosComponent;
  let fixture: ComponentFixture<SeccionProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccionProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
