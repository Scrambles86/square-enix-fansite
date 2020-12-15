import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Square Enix Fansite';
  games:any
  constructor(private http: HttpClient) {}
    private getData() {
      this.http.get('https://api.rawg.io/api/games?dates=2010-01-01,2020-12-31&developers=4132')
      .subscribe((game) => {
        console.log(game.results)
      })

  }
  ngOnInit() {
    this.getData()
  }
}
