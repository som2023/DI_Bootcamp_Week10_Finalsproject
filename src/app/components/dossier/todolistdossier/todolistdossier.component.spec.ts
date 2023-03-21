import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistdossierComponent } from './todolistdossier.component';

describe('TodolistdossierComponent', () => {
  let component: TodolistdossierComponent;
  let fixture: ComponentFixture<TodolistdossierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodolistdossierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodolistdossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
