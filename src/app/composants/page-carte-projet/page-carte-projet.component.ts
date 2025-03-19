import { Component } from '@angular/core';
import { CarteProjetComponent } from "../carte-projet/carte-projet.component";
import { LogoTechnoComponent } from '../logo-techno/logo-techno.component';

@Component({
  selector: 'app-page-carte-projet',
  imports: [CarteProjetComponent, LogoTechnoComponent],
  templateUrl: './page-carte-projet.component.html',
  styleUrl: './page-carte-projet.component.scss'
})
export class PageCarteProjetComponent {

  listeLogo = ["ts", "js", "html", "css", "angular", "react", "java", "git", "nodejs", "sql", "figma", "gitlab", "github", "docker", "linkedin", "sass",]
}
