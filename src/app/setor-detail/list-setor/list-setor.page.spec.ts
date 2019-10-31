import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSetorPage } from './list-setor.page';

describe('ListSetorPage', () => {
  let component: ListSetorPage;
  let fixture: ComponentFixture<ListSetorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSetorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSetorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
