import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierarmoireComponent } from './modifierarmoire.component';

describe('ModifierarmoireComponent', () => {
  let component: ModifierarmoireComponent;
  let fixture: ComponentFixture<ModifierarmoireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierarmoireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierarmoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
