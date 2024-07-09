import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './service/local-storage.service';
import { Character } from './character';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'rickymorti';
  characters: Character[] = [];

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.characters = this.localStorageService.getCharacters();
  }
}
