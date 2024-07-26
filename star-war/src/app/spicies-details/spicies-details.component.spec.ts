import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiciesDetailsComponent } from './spicies-details.component';

describe('SpiciesDetailsComponent', () => {
  let component: SpiciesDetailsComponent;
  let fixture: ComponentFixture<SpiciesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpiciesDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpiciesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
