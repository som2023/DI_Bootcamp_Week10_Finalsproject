import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierclasseurComponent } from './modifierclasseur.component';

describe('ModifierclasseurComponent', () => {
  let component: ModifierclasseurComponent;
  let fixture: ComponentFixture<ModifierclasseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierclasseurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierclasseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
