import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrashipDetailsComponent } from './straship-details.component';

describe('StrashipDetailsComponent', () => {
  let component: StrashipDetailsComponent;
  let fixture: ComponentFixture<StrashipDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrashipDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrashipDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
