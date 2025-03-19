import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-deviding-bar',
  imports: [],
  templateUrl: './deviding-bar.component.html',
  styleUrl: './deviding-bar.component.scss'
})
export class DevidingBarComponent {
  @Input() titre!: string;
}
