/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListDishesComponent } from './list-dishes.component';

describe('ListDishesComponent', () => {
  let component: ListDishesComponent;
  let fixture: ComponentFixture<ListDishesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDishesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
