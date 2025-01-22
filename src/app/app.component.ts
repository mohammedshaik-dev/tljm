import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AnnouncementsComponent } from './pages/announcements/announcements.component';
import { GalleryComponent } from './pages/gallery/gallery.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent,FooterComponent,HomeComponent,AboutComponent,ContactComponent,AnnouncementsComponent,GalleryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: `
  <app-header></app-header>
  <router-outlet></router-outlet>
  <app-footer></app-footer>
`,
})
export class AppComponent {
  title = 'triplicane-masjid-website';
}
