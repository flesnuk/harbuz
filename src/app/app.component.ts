import { Component } from '@angular/core';
import { Ingredient, IngredientPrice, Euro, EuroMassUnit, EuroVolumeUnit, MassUnit, VolumeUnit } from './models/ingredient.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ingredients: Ingredient[];

  constructor () {
    this.ingredients = [
      new Ingredient('rice', MassUnit),
      new Ingredient('water', VolumeUnit)
    ];
  }
}
