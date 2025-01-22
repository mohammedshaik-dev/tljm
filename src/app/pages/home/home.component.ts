import { Component } from '@angular/core';
import { PrayerTimingsComponent } from '../prayer-timings/prayer-timings.component';

@Component({
  selector: 'app-home',
  imports: [PrayerTimingsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
