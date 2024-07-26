import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantesDetailsComponent } from './plantes-details.component';

describe('PlantesDetailsComponent', () => {
  let component: PlantesDetailsComponent;
  let fixture: ComponentFixture<PlantesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantesDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
