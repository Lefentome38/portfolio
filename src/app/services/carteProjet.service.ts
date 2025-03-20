import { Injectable } from '@angular/core';
import { Projet } from '../models/carteProjet';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  private imgDefault = 'assets/images/imgProjet/fondBlanc.png'

  private projets: { [key: string]: Projet } = {
    calculatrice: {
      image: 'assets/images/imgProjet/projetCalculatriceAngular.png',
      titre: 'Calculatrice',
      logos: ["ts", "js", "html", "css", "angular"],
      liens: [
        { url: 'https://github.com/user/calculatrice', label: 'Front-end' },
        { url: 'https://github.com/user/calculatrice', label: 'Back-end' },
        { url: 'https://doc.calculatrice.com', label: 'Documentation' }
      ]
    },
    todoliste: {
      image: '',
      titre: 'To-Do Liste',
      logos: ["ts", "js", "html", "css", "angular"],
      liens: [
        { url: 'https://github.com/user/todolist', label: 'GitHub' },
        { url: 'https://demo.todolist.com', label: 'Démo' },
        { url: 'https://doc.todolist.com', label: 'Documentation' }
      ]
    }
  };

  getProjet(nom: string): Projet | null {
    const projet = this.projets[nom] || null;

    if(projet){
      projet.image = projet.image || this.imgDefault
    }
    
    return projet
  }
}
