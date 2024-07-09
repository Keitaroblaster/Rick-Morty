import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../character';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css'],
})
export class CarteComponent implements OnInit {
  @Input() character!: Character;

  constructor() {}

  ngOnInit(): void {}
}
