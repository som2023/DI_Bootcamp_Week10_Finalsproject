import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterclasseurComponent } from './ajouterclasseur.component';

describe('AjouterclasseurComponent', () => {
  let component: AjouterclasseurComponent;
  let fixture: ComponentFixture<AjouterclasseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterclasseurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterclasseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
