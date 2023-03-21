import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistarmoireComponent } from './todolistarmoire.component';

describe('TodolistarmoireComponent', () => {
  let component: TodolistarmoireComponent;
  let fixture: ComponentFixture<TodolistarmoireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodolistarmoireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodolistarmoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
