import { ApiService } from './api.service';
import { Component, OnInit } from '@angular/core';
import { ApiResponse, Game } from './models/test.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Square Enix Fansite';
  games: Game[] = [];

  constructor(private apiService: ApiService) {
    this.getGames();
  }

  getGames(): void {
    this.apiService.getData().subscribe((games: ApiResponse) => {
      this.games = games.results;
  });
}
}
