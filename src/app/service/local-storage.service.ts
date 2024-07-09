import { Injectable } from '@angular/core';
import { Character } from '../character';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private storageKey = 'rickyMortiCharacters';

  constructor() {}

  saveCharacter(character: Character): void {
    let characters = this.getCharacters();
    characters.push(character);
    localStorage.setItem(this.storageKey, JSON.stringify(characters));
  }

  getCharacters(): Character[] {
    let characters = localStorage.getItem(this.storageKey);
    return characters ? JSON.parse(characters) : [];
  }
}
