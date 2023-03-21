import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DossierrechercherComponent } from './dossierrechercher.component';

describe('DossierrechercherComponent', () => {
  let component: DossierrechercherComponent;
  let fixture: ComponentFixture<DossierrechercherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DossierrechercherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DossierrechercherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
