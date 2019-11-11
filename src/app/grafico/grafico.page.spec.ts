import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoPage } from './grafico.page';

describe('GraficoPage', () => {
  let component: GraficoPage;
  let fixture: ComponentFixture<GraficoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
