import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistclasseurComponent } from './todolistclasseur.component';

describe('TodolistclasseurComponent', () => {
  let component: TodolistclasseurComponent;
  let fixture: ComponentFixture<TodolistclasseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodolistclasseurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodolistclasseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
