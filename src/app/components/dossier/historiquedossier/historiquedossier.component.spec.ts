import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriquedossierComponent } from './historiquedossier.component';

describe('HistoriquedossierComponent', () => {
  let component: HistoriquedossierComponent;
  let fixture: ComponentFixture<HistoriquedossierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriquedossierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoriquedossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
