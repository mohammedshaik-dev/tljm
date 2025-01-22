import { Component,HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  activeSection: string = 'home';
    // Flag to track if the mobile nav is active
    isMobileNavActive: boolean = false;

    toggleMobileNav(): void {
      this.isMobileNavActive = !this.isMobileNavActive;
      const body = document.body;
      if (this.isMobileNavActive) {
        body.classList.add('mobile-nav-active');
      } else {
        body.classList.remove('mobile-nav-active');
      }
    }

  

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Update active section after scroll
        this.activeSection = sectionId;
    }
  }

  // Listen for scroll events
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = ['home', 'about', 'contact','announcement','gallery']; // List of section ids
    const scrollPosition = window.scrollY;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        // Check if the section is in the viewport
        if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight) {
          this.activeSection = section;
          break; // Stop at the first section in the viewport
        }
      }
    }
  }
  
}
