import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistcompagnieComponent } from './todolistcompagnie.component';

describe('TodolistcompagnieComponent', () => {
  let component: TodolistcompagnieComponent;
  let fixture: ComponentFixture<TodolistcompagnieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodolistcompagnieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodolistcompagnieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
