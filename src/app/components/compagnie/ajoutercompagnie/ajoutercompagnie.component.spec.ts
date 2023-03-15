import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutercompagnieComponent } from './ajoutercompagnie.component';

describe('AjoutercompagnieComponent', () => {
  let component: AjoutercompagnieComponent;
  let fixture: ComponentFixture<AjoutercompagnieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutercompagnieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutercompagnieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
