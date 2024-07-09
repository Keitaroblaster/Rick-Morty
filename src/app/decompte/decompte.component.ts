import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { LocalStorageService } from '../service/local-storage.service';
import { Character } from '../character';

@Component({
  selector: 'app-decompte',
  templateUrl: './decompte.component.html',
  styleUrls: ['./decompte.component.css'],
})
export class DecompteComponent implements OnInit {
  heures: number = 0;
  minutes: number = 0;
  secondes: number = 0;
  afficherBoutonTirage: boolean = true;
  character!: Character;

  constructor(
    private apiService: ApiService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.debutDecompte;
  }

  debutDecompte() {
    const interval = setInterval(() => {
      if (this.heures === 0 && this.minutes === 0 && this.secondes === 0) {
        this.afficherBoutonTirage = true;
        clearInterval(interval);
      } else {
        if (this.secondes > 0) {
          this.secondes--;
        } else {
          this.secondes = 59;
          if (this.minutes > 0) {
            this.minutes--;
          } else {
            this.minutes = 59;
            if (this.heures > 0) {
              this.heures--;
            }
          }
        }
      }
    }, 1000);
  }

  tirerCarte() {
    this.afficherBoutonTirage = false;
    this.apiService.getRandomCharacter().subscribe((character: Character) => {
      this.localStorageService.saveCharacter(character);
      this.character = character;
    });
    this.heures = 2;
    this.minutes = 0;
    this.secondes = 0;
    this.debutDecompte();
  }
}
