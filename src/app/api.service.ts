import { ApiResponse } from './models/test.model';
import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({providedIn : 'root'})


export class ApiService {

  apiService = new EventEmitter<ApiService>();

  constructor(private http: HttpClient) {}

    private getData(): Observable<any> {
      return this.http.get('https://api.rawg.io/api/games?dates=2010-01-01,2020-12-31&developers=4132');
        console.log(Game)

  }

  }






