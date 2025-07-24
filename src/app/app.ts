import { Component, signal } from '@angular/core';
import { HomeComponent } from './home/home';
import { AboutComponent } from './about/about';
import { SkillsComponent } from './skills/skills';
import { ProjectsComponent } from './projects/projects';
import { ContactComponent } from './contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Langaliya Pratham');
  toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    if(navLinks)
    {

      navLinks.classList.toggle('show');
    }
}

}
