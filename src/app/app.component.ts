import { Component } from '@angular/core';
import { Ingredient, Euro, EuroMassUnit, MassUnit } from './models/ingredient.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ingredients: Ingredient[];

  constructor () {
  	this.ingredients = [
  		new Ingredient(0, "rice", new EuroMassUnit(MassUnit.g, new Euro("", 541))), 
  		new Ingredient(1, "water", new EuroMassUnit(MassUnit.g, new Euro("", 124)))
  	];
  }
}
