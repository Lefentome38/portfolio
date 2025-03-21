import { Component } from '@angular/core';
import { LogoTechnoComponent } from "./composants/logo-techno/logo-techno.component";
import { BulleCompetencesComponent } from "./composants/bulle-competences/bulle-competences.component";
import { DevidingBarComponent } from "./composants/deviding-bar/deviding-bar.component";
import { PageCarteProjetComponent } from "./composants/page-carte-projet/page-carte-projet.component";

@Component({
  selector: 'app-root',
  imports: [LogoTechnoComponent, BulleCompetencesComponent, DevidingBarComponent, PageCarteProjetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
