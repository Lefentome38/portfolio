import { Component, Input, OnInit} from '@angular/core';
import { ProjetService } from '../../services/carteProjet.service';
import { Projet } from '../../models/carteProjet';

@Component({
  selector: 'app-carte-projet',
  imports: [],
  templateUrl: './carte-projet.component.html',
  styleUrl: './carte-projet.component.scss'
})
export class CarteProjetComponent implements OnInit {

  @Input() projet!: string;
  data: Projet | null = null;

  constructor(private projetService: ProjetService) {}

  ngOnInit() {
    this.data = this.projetService.getProjet(this.projet);
    if (!this.data) {
      console.error(`Projet "${this.projet}" introuvable.`);
    }
  }
}
