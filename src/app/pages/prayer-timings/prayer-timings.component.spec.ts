import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerTimingsComponent } from './prayer-timings.component';

describe('PrayerTimingsComponent', () => {
  let component: PrayerTimingsComponent;
  let fixture: ComponentFixture<PrayerTimingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrayerTimingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrayerTimingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
