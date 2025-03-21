import { Component } from '@angular/core';

@Component({
  selector: 'app-bulle-competences',
  imports: [],
  templateUrl: './bulle-competences.component.html',
  styleUrl: './bulle-competences.component.scss'
})

export class BulleCompetencesComponent {

  listComposantsFrontend = ["react", "ts", "js", "sass", "angular"]
  listComposantsBackend = ["sql", "nodejs"]
  listComposantsOutils = ["docker", "git", "github", "gitlab", "figma"]


}

