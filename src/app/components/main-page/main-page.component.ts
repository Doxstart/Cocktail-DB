import { Component, OnInit } from '@angular/core';
import { Drinks } from 'src/app/model/cocktails';
import { Cocktails } from 'src/app/model/cocktails-main';
import { ConnectionService } from 'src/app/services/connections/connection.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit{
  drinks: Drinks[] = [];

  cocktails: Cocktails[] = [];

  constructor(public ConnServ: ConnectionService){
  }

  ngOnInit(): void {
    this.ConnServ.getCocktails().subscribe({
      next: data => this.drinks = data as any as Drinks[],
      error: err => console.log(err)
    })
    this.ConnServ.getDrinks().subscribe({
      next: data => this.cocktails = data as any as Cocktails[],
      error: err => console.log(err)
    })
  }
}
