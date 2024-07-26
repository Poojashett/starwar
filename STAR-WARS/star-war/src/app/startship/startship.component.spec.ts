import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartshipComponent } from './startship.component';

describe('StartshipComponent', () => {
  let component: StartshipComponent;
  let fixture: ComponentFixture<StartshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartshipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
