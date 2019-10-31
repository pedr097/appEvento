import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSetorPessoasPage } from './list-setor-pessoas.page';

describe('ListSetorPessoasPage', () => {
  let component: ListSetorPessoasPage;
  let fixture: ComponentFixture<ListSetorPessoasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSetorPessoasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSetorPessoasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
