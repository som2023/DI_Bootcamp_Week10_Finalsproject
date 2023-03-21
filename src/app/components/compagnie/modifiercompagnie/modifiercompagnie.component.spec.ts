import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiercompagnieComponent } from './modifiercompagnie.component';

describe('ModifiercompagnieComponent', () => {
  let component: ModifiercompagnieComponent;
  let fixture: ComponentFixture<ModifiercompagnieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifiercompagnieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifiercompagnieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
