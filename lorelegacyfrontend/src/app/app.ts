import { Component, signal } from '@angular/core';
import { CharacterSheet } from './character-sheet/character-sheet';

@Component({
  selector: 'app-root',
  imports: [CharacterSheet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lorelegacyfrontend');
}
