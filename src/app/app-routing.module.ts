import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Adjust the path based on your file structure
import { AboutComponent } from './about/about.component'; // Adjust the path based on your file structure
import { ProjectsComponent } from './projects/projects.component'; // Adjust the path based on your file structure
import { NavbarComponent } from './navbar/navbar.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to home on empty path
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '/home' }, // Redirect to home for any unmatched routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
