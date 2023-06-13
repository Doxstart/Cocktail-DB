import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Drinks } from 'src/app/model/cocktails';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  readonly API_URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

  constructor(private http: HttpClient) {
  }

  getDrinks(): Observable<Drinks[]>{
    return this.http.get<any>(this.API_URL)
    .pipe(
      map((data: any) => data.drinks)
    )
  };

  getCocktails(): Observable<Drinks[]>{
    return this.http.get<any>(this.API_URL)
    .pipe(
      map((data: any) => data.cocktails)
    )
  }

}
