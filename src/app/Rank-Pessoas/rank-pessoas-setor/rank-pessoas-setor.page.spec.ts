import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankPessoasSetorPage } from './rank-pessoas-setor.page';

describe('RankPessoasSetorPage', () => {
  let component: RankPessoasSetorPage;
  let fixture: ComponentFixture<RankPessoasSetorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankPessoasSetorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankPessoasSetorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
