import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiciesComponent } from './spicies.component';

describe('SpiciesComponent', () => {
  let component: SpiciesComponent;
  let fixture: ComponentFixture<SpiciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpiciesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpiciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
