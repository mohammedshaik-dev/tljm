import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prayer-timings',
  imports: [CommonModule],
  templateUrl: './prayer-timings.component.html',
  styleUrl: './prayer-timings.component.css'
})
export class PrayerTimingsComponent {
  prayerTimings = [
    { name: 'Fajr', time: '05:15 AM' },
    { name: 'Dhuhr', time: '12:45 PM' },
    { name: 'Asr', time: '04:00 PM' },
    { name: 'Maghrib', time: '06:00 PM' },
    { name: 'Isha', time: '07:40 PM' }
  ];
}
