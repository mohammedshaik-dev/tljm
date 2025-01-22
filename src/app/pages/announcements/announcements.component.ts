import { Component   } from '@angular/core';
import { CommonModule } from '@angular/common';
import {   trigger,
  transition,
  style,
  animate,
  keyframes} from '@angular/animations';

@Component({
  selector: 'app-announcements',
  imports: [CommonModule],
  templateUrl: './announcements.component.html',
  styleUrl: './announcements.component.css',
  animations: [
   trigger('newBadgePulse', [  
    transition('* => active', [
      animate('1.5s ease-in-out', keyframes([
        style({ transform: 'scale(1)', opacity: 1, offset: 0 }),
        style({ transform: 'scale(1.1)', opacity: 0.8, offset: 0.5 }),
        style({ transform: 'scale(1)', opacity: 1, offset: 1 }),
      ])),
    ]),
  ])
  ],
})
export class AnnouncementsComponent  {
  announcements = [
    { title: 'Community Meeting', content: 'Join us for a community meeting this Friday at 7 PM.', date: '14-01-2025', isNew: true },
    { title: 'Charity Drive', content: 'We are organizing a charity drive to help the needy.', date: '10-01-2025', isNew: false },
    { title: 'Eid Celebration', content: 'Celebrate Eid with us on the 20th of this month.', date: '05-01-2025', isNew: false },
    { title: 'Weekly Prayer Timings', content: 'Check the updated prayer timings for this week.', date: '02-01-2025', isNew: false },
    
  ];
}
