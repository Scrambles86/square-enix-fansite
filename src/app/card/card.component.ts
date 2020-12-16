import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../models/test.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
@Input() games: Game[] = [];
  constructor() { }

  ngOnInit(): void {
    console.log(this.games);
  }

}
