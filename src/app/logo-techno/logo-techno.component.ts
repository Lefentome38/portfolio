import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo-techno',
  imports: [],
  templateUrl: './logo-techno.component.html',
  styleUrl: './logo-techno.component.scss'
})

export class LogoTechnoComponent {
 @Input() techno!: string;

 logos: {[key: string]: string} = {
  ts: 'assets/images/ts.png',
  js: 'assets/images/js.png',
  html: 'assets/images/html.png',
  css: 'assets/images/css3.png', 
  angular: 'assets/images/angular.png',
  react: 'assets/images/react.png',
  java: 'assets/images/java.png',
  git: 'assets/images/git.png',
  nodejs: 'assets/images/nodejs.png',
  sql: 'assets/images/sql.png',
  figma: 'assets/images/figma.png',
  gitlab: 'assets/images/gitlab.png',
  github: 'assets/images/github.png',
  docker: 'assets/images/docker.png',
 }

 get logoSrc(): string {
  return this.logos[this.techno] || 'assets/images/img.png';
 }
}
