import { Component } from '@angular/core';
import { Ingredient } from './models/ingredient.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ingredients: Ingredient[];

  constructor () {
  	this.ingredients = [new Ingredient(0, "arroz", 5), new Ingredient(1, "agua", 1)];
  }
}
