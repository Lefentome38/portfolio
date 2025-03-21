import { Component } from '@angular/core';
import { LogoTechnoComponent } from "./composants/logo-techno/logo-techno.component";
import { BulleCompetencesComponent } from "./composants/bulle-competences/bulle-competences.component";
import { DevidingBarComponent } from "./composants/deviding-bar/deviding-bar.component";
import { PageCarteProjetComponent } from "./composants/page-carte-projet/page-carte-projet.component";
import { FullScreenHomeImageComponent } from "./composants/full-screen-home-image/full-screen-home-image.component";
import { HeaderComponent } from "./composants/header/header.component";
import { PageProfilComponent } from "./composants/page-profil/page-profil.component";

@Component({
  selector: 'app-root',
  imports: [LogoTechnoComponent, BulleCompetencesComponent, DevidingBarComponent, PageCarteProjetComponent, FullScreenHomeImageComponent, HeaderComponent, PageProfilComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
