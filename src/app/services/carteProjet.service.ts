import { Injectable } from '@angular/core';
import { Projet } from '../models/carteProjet';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  private projets: { [key: string]: Projet } = {
    calculatrice: {
      image: 'assets/images/imgProjet/projetCalculatriceAngular.png',
      titre: 'Calculatrice',
      logos: ["ts", "js", "html", "css", "angular"],
      liens: [
        { url: 'https://github.com/user/calculatrice', label: 'GitHub' },
        { url: 'https://demo.calculatrice.com', label: 'Démo' },
        { url: 'https://doc.calculatrice.com', label: 'Documentation' }
      ]
    },
    todoliste: {
      image: 'assets/images/todo.png',
      titre: 'To-Do Liste',
      logos: ['assets/icons/react.svg', 'assets/icons/firebase.svg'],
      liens: [
        { url: 'https://github.com/user/todolist', label: 'GitHub' },
        { url: 'https://demo.todolist.com', label: 'Démo' },
        { url: 'https://doc.todolist.com', label: 'Documentation' }
      ]
    }
  };

  getProjet(nom: string): Projet | null {
    return this.projets[nom] || null;
  }
}
