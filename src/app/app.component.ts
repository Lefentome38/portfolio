import { Component } from '@angular/core';
import { LogoTechnoComponent } from "./composants/logo-techno/logo-techno.component";
import { BulleCompetencesComponent } from "./composants/bulle-competences/bulle-competences.component";

@Component({
  selector: 'app-root',
  imports: [LogoTechnoComponent, BulleCompetencesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
