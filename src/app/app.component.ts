import { Component } from '@angular/core';
import { Ingredient, Euro } from './models/ingredient.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ingredients: Ingredient[];

  constructor () {
  	this.ingredients = [new Ingredient(0, "arroz", new Euro(5)), new Ingredient(1, "agua", new Euro(4.5))];
  }
}
