import { Component } from '@angular/core';
import { LogoTechnoComponent } from "../logo-techno/logo-techno.component";

@Component({
  selector: 'app-bulle-competences',
  imports: [LogoTechnoComponent],
  templateUrl: './bulle-competences.component.html',
  styleUrl: './bulle-competences.component.scss'
})

export class BulleCompetencesComponent {

  listComposantsFrontend = ["react", "ts", "js", "sass", "angular"]
  listComposantsBackend = ["react", "ts", "js", "sass", "angular"]
  listComposantsOutils = ["react", "ts", "js", "sass", "angular"]


}

