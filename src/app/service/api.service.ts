import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../character';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {}

  getRandomCharacter(): Observable<Character> {
    const characterId = Math.floor(Math.random() * 826) + 1;
    return this.http.get<Character>(`${this.url}/character/${characterId}`);
  }
}
