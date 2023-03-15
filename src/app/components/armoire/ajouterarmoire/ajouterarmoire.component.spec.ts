import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterarmoireComponent } from './ajouterarmoire.component';

describe('AjouterarmoireComponent', () => {
  let component: AjouterarmoireComponent;
  let fixture: ComponentFixture<AjouterarmoireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterarmoireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterarmoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
